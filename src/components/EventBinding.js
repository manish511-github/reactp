import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props)
    {
    super(props)
    this.state={
        message:'Hello'
    }
    this.clickHandler=this.clickHandler.bind(this)
}

    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye!'
    //     })
    // }
    clickHandler=()=>{
        this.setState({
            message:'Goodbye!'
        })
    }
  render() {
    return (
        <div>
      <div>{this.state.message}</div>
      {/* <button onClick={this.clickHandler}>Click</button> */}
      <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
