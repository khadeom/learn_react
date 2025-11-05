import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(props) {
     super(props)   
     this.state = {
        name: 'OM'
     }
    }

  render() {
    return (
      <h1>ClassComp {this.state.name}</h1>
    )
  }
}
