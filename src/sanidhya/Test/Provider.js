import React, { useState } from 'react'
import MyContext from './MyContext'

const Provider = ({children}) => {


    // global states
    const [name , setNamne] = useState("Sanidhya")





  return (
    <MyContext.Provider value={{name, setNamne}}>
        {children}
    </MyContext.Provider>
  )
}

export default Provider
