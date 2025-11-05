import React from 'react'
import {useState} from 'react'
// insted of import useState as its not a default function like React
function FormDemo() {

    const[name,setName] = useState("")

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`Form submitted with name: ${name}`)
    }

    const [employees, setEmp] = useState([
        {empId:1, empName: 'Sham', salary: 400 },
        {empId:2, empName: 'Ram', salary: 401 },
        {empId:3, empName: 'Dham', salary: 403 },
    ])

    function handleDelete(id){
        setEmp(employees.filter((product)=>product.empId !== id))
    }

    function handleEmpSubmit(event){
        event.preventDefault()
        employees.push({empId:event.target.emp_id.value, empName: event.target.emp_name.value, salary: event.target.salary.value})
        setEmp([...employees])
        // setEmp([employees]) why cant we use this
        // alert(employees)
    }
  return (
    <div>

        <h1>User Form</h1>

        <table className="table table-sm table-hover table-striped w-75 mx-auto">
            <thead>
            <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Salary</th>
            </tr>
            </thead>
            <tbody>
                {employees.map((emp)=>(
                    <tr key={emp.empId}>
                        <td>{emp.empId}</td>
                        <td>{emp.empName}</td>
                        <td>{emp.salary}</td>
                        <td><button onClick={()=>handleDelete(emp.empId)}>Delete</button></td>
                    </tr>
                ))
                }            
            </tbody>
        </table>
        <b></b>
        <h2>Employee Form</h2>
        <form onSubmit={handleEmpSubmit}>
            <label for='emp_id'>Emp Id</label>
            <input id='emp_id' type="text"  ></input>
            <label>Emp Name</label>
            <input id='emp_name' type="text"></input>
            <label>Emp Salary</label>
            <input id='salary' type="text"  ></input>
            <button type="submit">Submit</button>
        </form>

        {/* <form onSubmit={handleSubmit}>
            <lable for='name_input'>Name:</lable>
            <input id='name_input' type="text" value={name} onChange={(event)=>setName(event.target.value)}></input>
            <p>Your name is: {name}</p>
            <button type="submit">Submit</button>
        </form> */}

    </div>
  )
}

export default FormDemo