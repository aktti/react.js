import React, { useContext } from 'react'
import MyContext from '../ContextStore/MyContext'
import { useNavigate } from 'react-router-dom'


const Order = () => {

    const {name} = useContext(MyContext)
    const navigate = useNavigate()
  return (
    <div>
        <h1>
            {name}


            <button onClick={()=>navigate("/name")}>nav</button>
        </h1>
    </div>
  )
}

export default Order
