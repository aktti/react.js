import React, { useState } from 'react'

const Home = () => {

const[sanidhya,setSanidhya]=useState()

const token=localStorage.getItem("token")

  return (
    <div>
      <input type='text' value={sanidhya} ></input>
      <input type='text' value={setSanidhya} ></input>

    </div>
  )
}

export default Home




















