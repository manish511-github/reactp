import { ThemeProvider } from '@emotion/react'
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
    return this.state.isLoggedIn?(
        <div> Welcome Vishwas</div>
    ):
    (
        <div>Welcome Guest</div>
    )
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
