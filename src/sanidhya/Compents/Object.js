import React, { useEffect, useReducer } from 'react'

const Object = () => {

    const reducer = (state , action) =>{

        switch (action.type) {
            case "update_name":
                return {...state , "name" : action.value}

            case "update_email":
                return {...state , "email" : action.value}

            case "update_password":
                return {...state , "password" : action.value}
        
            default:
                return state;
        }


    }

    const initialValue = {
        name:"",
        email:"",
        password:""
    }



    const [registerForm , dispatcher] = useReducer(reducer , initialValue)

    useEffect(()=>{
        dispatcher({
            type : "update_name",
            value : "Sanidhya"
        })
    },[])

  return (
    <div>

{/* name  */}

<h1>name</h1>
    <input 
    type='text'
    value={registerForm.name}
    onChange={(e)=>{
        dispatcher(
            {
              type : "update_name" ,
              value : e.target.value
            }
        )
    }}
    />


{/* email */}

<h1>email</h1>
    <input 
    type='text'
    value={registerForm.email}
    onChange={(e)=>{
        dispatcher(
            {
                type:"update_email",
                value:e.target.value
             }
    )
    }}
    />


{/* password */}
<h1>password</h1>
    <input 
    value={registerForm.password}
    onChange={(e)=>{
    dispatcher(
        {
            type:"update_password",
            value : e.target.value
        }
    )        
    }}
    />


<h1>name : {registerForm.name}</h1>
<h1>email : {registerForm.email}</h1>
<h1>password : {registerForm.password}</h1>



    </div>


  )
}

export default Object

