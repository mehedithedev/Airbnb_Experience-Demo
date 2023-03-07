import React from 'react'
class ClassComponent extends React.Component{
    constructor(props){
        super(props)
    }
    // Override the render method
    render(){
        return(
            <button onClick={this.props.clickEvent}>
                Click Me!
            </button>
        )
    }
}
export default ClassComponent;