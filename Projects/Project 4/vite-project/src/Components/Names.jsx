const NameFunction = () => {
    const names = ['Pedro', 'Jake', 'Jessica', 'Mike', 'John', 'Sara', 'Sue', 'Sally', 'Samantha', 'Sasha']
   return(
         <div>
                {names.map((name, key) => {
                    return <div key={key}>{name}</div>
                }
                )}
            </div>

   )
}
export default NameFunction