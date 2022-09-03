import React, { Component } from 'react'
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Message from './components/Message';
export default class App extends Component {
  render() {
    return (
   <div className="App">
    
 <Message/>
    {/* <Greet name="Bruce" heroName="Batsman" >
    <p>This is children props</p>
    </Greet>
    <Greet name="Clark" heroName="Superman" >
    <button> Action</button>
    </Greet>
    <Greet name="Diana" heroName="Wonder Women"/>
    <Welcome name="Bruce" heroName="Batsman" />
    <Welcome name="Clark" heroName="Superman" />
    <Welcome name="Diana" heroName="Wonder Women"/> */}

   </div>
    )
  }
}
