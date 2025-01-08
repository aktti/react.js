import React, { useContext } from 'react'
import MyContext from '../ContextStore/MyContext'
import { useNavigate } from 'react-router-dom'

const Customer = () => {
    const {name, setNamne} = useContext(MyContext)
    const navigate = useNavigate()
  return (
    <div>

        <input 
        type='text'
        value={name}
        onChange={(e)=>setNamne(e.target.value)}
        
        />

        <button onClick={()=>navigate("/")}>nav</button>


    </div>
  )
}

export default Customer
