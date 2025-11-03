import React from "react";

// Statefull components
class ClassDemo extends React.Component {
    name = "Om";  
    //Above variable if changed the component won't rerender but of the this.state changes then the 
    // component will rerender.
    constructor(){
        super();
        this.state = {
            orgname: 'JPMC',
            count: 0
        }
    }

    increment=()=>{
        this.setState({count: this.state.count+1})
    }

    render() {
        return (
            <div class='demo-class'>
                <h1>Class Component {this.state.orgname} {this.name}. Count {this.state.count} </h1>
                
                <button onClick={()=>{this.increment()}}> Increment </button>
                <button onClick={()=>{this.setState({count: this.state.count-2})}}> Decrement </button>
            </div>
        );
    }
}

export default ClassDemo;
