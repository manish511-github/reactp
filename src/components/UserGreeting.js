import React, { Component } from 'react'

export default class UserGreeting extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            isLoggedIn:false
        }
    }
  render() {
    let message
    if(this.state.isLoggedIn)
    {
        message=<div>Welcome Vishwas</div>
    }
    else{
        message=<div> Welcome Guest</div>
    }
    return <div>{message}</div>
//     if(this.state.isLoggedIn)
// {
//     return  <div>Welcome Manish</div>
       

//     }
//     else
//     {
// return   <div>Welcome Guest</div>
//     }
    // return (
    //     <div> 
    //  
    // 
    //   </div>

    // )
  }
}
