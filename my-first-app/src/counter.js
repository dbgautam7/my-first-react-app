import React, {useState} from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)

    return (
      <div className='counter'>
        
        <button onClick={() => setCount(count + 1)}>Increment</button><br></br>
        <span style={{ color: 'red', fontSize: '20px' }}>{count}</span><br></br>
        <button onClick={() =>{
          if(count>0){
            setCount(count-1)
          }
          else{
            setCount(0)
          }
        }
          }>Decrement</button><br></br>
        <button onClick={() => setCount(0)}>Reset</button>
  
      </div>
    )
}

export default Counter