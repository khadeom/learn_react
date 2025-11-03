import { DivideIcon } from "@salt-ds/icons";

function Demo(){
    return <h1>This is demo</h1>
}

// Stateless components
function Login(props) {
    return (
        <div class='demo-class'>
            Login from <strong>{props.location}</strong>
        </div>
    )
}

export default Login
export {Demo}