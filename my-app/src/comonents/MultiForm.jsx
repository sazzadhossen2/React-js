
import React, { useState } from 'react'

export default function MultiForm() {

  const [form, setForm] =useState({name:"",email:""});

 

  const handleChange=(e)=>{
    const {name,value} =e.target;
    setForm(prev=>({...prev,[name]:value}))
  }
  return (
    <div>
 <h1>Multiple From</h1>
 <form>
  <input type="text" placeholder='Name' name='name' onChange={handleChange} />

   <input type="text" placeholder='Email' name='email' onChange={handleChange} />

   <p>{form.name}--{form.email}</p>
 </form>

    </div>
  )
}
