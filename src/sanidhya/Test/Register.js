import React, { useReducer,useNavigate } from 'react'

const Register = () => {
const Register =useReducer(email,password)
const Navigate=useNavigate()

if(Status=="001"){
    console.log("The response is sucessfully");
}else{
    console.log("The response is sucessfully");
}


  return (
    <div>
      <input
      type='text'
      value= {email}/>
<Register/>
<input
      type='text'
      value= {password}/>
<Navigate/>
    </div>
  )
}

export default Register
