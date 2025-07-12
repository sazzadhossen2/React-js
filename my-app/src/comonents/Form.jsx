import React, { useState } from 'react';

 function Form() {
  const [name, setName] =useState("")
   const [language,setLenguage]=useState("JavaScript")
  const handleSubmit =(e)=>{
    e.preventDefault();

    console.log(name,language)
    setName(" ")
    // alert(name)
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} />
  <select name="" id="" value={language} onChange={(e)=>setLenguage(e.target.value)}>
    <option value="JavaScript">JavaScript</option>
     <option value="Python">Python</option>
      <option value="Java">Java</option>
  </select>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;
