import React from 'react'

export default function NameList() {
    const names=['Bruce','Clark','Diana']
    const nameList=
    names.map(name=> <h2>{name}</h2>)
  return (
  <div>
    {nameList
    }
  </div>
  )
}
