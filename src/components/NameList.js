import React from 'react'
import Person from './Person'

export default function NameList() {
    const persons=[{
        id:1,
        name:'Bruce',
        age:30,
        skill:'React'
    },
    {
        id:2,
        name:'Clark',
        age:25,
        skill:'Angular'
    },
    {
        id:3,
        name:'Diana',
        age:25,
        skill:'Vue'
    }

]
 const personList=persons.map(person=> <Person person={Person}/>)
  return (
  <div>
    {personList
    }
  </div>
  )
}
