
import React, { useState } from 'react'

export default function InputName() {
  const [name,setName]=useState("")
  const handelSubmit =()=>{
    alert(name)
  }
  return (
    <div>
      <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />

      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}
