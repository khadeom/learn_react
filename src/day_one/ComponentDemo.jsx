import { useState } from "react"

const ComponentDemo = () => {

    const [count,setCount]=useState(0)
  return (

    
    <div class='demo-class'>
      <h1>Count: {count}</h1>  
          
      <button onClick={()=>setCount(count+1)}> Increment</button>
      <button onClick={()=>setCount(count-1)}> Decrement</button>
    </div>

  )
}

export default ComponentDemo
