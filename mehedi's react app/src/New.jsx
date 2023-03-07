import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophone,
  faSpinner,
  faCheckCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';


function New() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [summaryLength, setSummaryLength] = useState('short');
  const [summary, setSummary] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  useEffect(() => {
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.onresult = handleSpeechRecognitionResult;
    recognition.onerror = handleSpeechRecognitionError;
  }, []);

  const handleSpeechRecognitionResult = (event) => {
    setIsTranscribing(false);
    setIsRecording(false);
    const transcript = event.results[0][0].transcript;
    setTranscription(transcript);
    summarizeTranscription(transcript);
    addToChatHistory('User', transcript);
  };

  const handleSpeechRecognitionError = (event) => {
    setIsTranscribing(false);
    setIsRecording(false);
    alert('There was an error with speech recognition. Please try again.');
  };

  const handleTranscription = () => {
    if (!isRecording) {
      setIsRecording(true);
      setIsTranscribing(true);
      setTranscription('');
      recognition.start();
    }
  };

  const summarizeTranscription = async (transcript) => {
    const API_KEY = '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';
    const API_URL = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/summarize';

    try {
      const response = await axios.post(API_URL, {
        prompt: transcript,
        length: summaryLength
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      });
      const summary = response.data.choices[0].text;
      setSummary(summary);
      addToChatHistory('AI', summary);
    } catch (error) {
      alert('There was an error with summarization. Please try again.');
    }
  };

  const addToChatHistory = (author, message) => {
    const newChat = { author, message };
    setChatHistory((prevHistory) => [...prevHistory, newChat]);
  };

  const handleSummaryLengthChange = (event) => {
    setSummaryLength(event.target.value);
    setSummary('');
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Whisper Chat</h1>
      {transcription && (
        <div className="transcription-container">
          <h2>Transcription:</h2>
          <p className="transcription">{transcription}</p>
        </div>
      )}
      {isTranscribing && (
        <div className="loading-container">
          <FontAwesomeIcon
            icon={faSpinner}
            className="loading-spinner"
            spin
          />
          <p className="loading-text">Transcribing...</p>
        </div>
      )}
      {summary && (
        <div className="summary-container">
          <h2>Summary:</h2>
          <p className="summary">{summary}</p>
       
          </div>
  )}
  <div className="record-button-container">
    <button className="record-button" onClick={handleTranscription}>
      {isRecording ? (
        <FontAwesomeIcon
          icon={faSpinner}
          className="loading-spinner"
          spin
        />
      ) : (
        <FontAwesomeIcon icon={faMicrophone} className="microphone-icon" />
      )}
    </button>
  </div>
  <div className="summary-length-container">
    <label htmlFor="summary-length-select">Summary Length:</label>
    <select
      id="summary-length-select"
      value={summaryLength}
      onChange={handleSummaryLengthChange}
    >
      <option value="short">Short</option>
      <option value="medium">Medium</option>
      <option value="long">Long</option>
    </select>
  </div>
  <div className="chat-history-container">
    <h2>Chat History:</h2>
    <ul className="chat-history">
      {chatHistory.map((chat, index) => (
        <li
          key={index}
          className={`chat-item ${
            chat.author === 'User' ? 'user-message' : 'ai-message'
          }`}
        >
          <div className="chat-author">{chat.author}:</div>
          <div className="chat-message">{chat.message}</div>
          {chat.author === 'AI' &&
            summaryLength === 'long' &&
            chat.message.length > 500 && (
              <div className="chat-warning">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="warning-icon"
                />
                <div className="warning-text">
                  This summary may be truncated. Please select a shorter
                  summary length.
                </div>
              </div>
            )}
          {chat.author === 'AI' &&
            summaryLength !== 'long' &&
            chat.message.length < 500 && (
              <div className="chat-success">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="success-icon"
                />
                <div className="success-text">
                  This summary is complete.
                </div>
              </div>
            )}
        </li>
      ))}
    </ul>
  </div>
</div>
);
}

export default New;