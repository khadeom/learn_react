import { useState } from "react"

const ComponentDemo = (props) => {

    const [count,setCount]=useState(0)
    const [emp,setEmp]=useState({
      id:props.emp.id,
      name:props.emp.name,
      sal:props.emp.sal
    })


  return (

    
    <div class='demo-class'>
      <h1>Count: {count}</h1>  

      <button onClick={()=>setCount(count+1)}> Increment</button>
      <button onClick={()=>setCount(count-1)}> Decrement</button>

      <h1>Employee Details</h1>
      <div class='list-class'>
        <ul >
          <li>Id: {emp.id}</li>
          <li>Name: {emp.name}</li>
          <li>Salary: {emp.sal}</li>
        </ul>
        <div class="button-class">
        <button onClick={()=>{setEmp({...emp, sal:emp.sal+5})}}> Increment 5</button>
        <button onClick={()=>{setEmp({...emp, sal:emp.sal+10})}}> Increment 10</button>
        <button class="my-button" onClick={()=>{setEmp({...emp, sal:emp.sal-5})}}> Decrement 5</button>
        <button class="my-button" onClick={()=>{setEmp({...emp, sal:emp.sal-10})}}> Decrement 10</button>
        <button class="my-button" onClick={()=>{setEmp({...emp, sal:emp.sal-20})}}> Decrement 20</button>
        </div>
      </div>
    </div>

  )
}

export default ComponentDemo
