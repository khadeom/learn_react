import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
        employees.push({empId:event.target.formEmpId.value, empName: event.target.formEmpName.value, salary: event.target.formSalary.value})
        setEmp([...employees])
        // setEmp([employees]) why cant we use this
        // alert(employees)
    }

    function handleChange(event){
        setName(event.target.value)
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
        
        <div className='d-flex justify-content-center mb-3'>
        <Form onSubmit={handleEmpSubmit} style={{ width: '100%', maxWidth: 420 }}>
            <Form.Group className="mb-3" controlId="formEmpId">
                <Form.Label>Employee ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Employee ID" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmpName">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Employee Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control type="text" placeholder="Enter Salary" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    </div>
  )
}

export default FormDemo