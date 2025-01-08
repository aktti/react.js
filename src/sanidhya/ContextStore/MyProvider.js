import React, { useState } from 'react'
import MyContext from './MyContext'

const MyProvider = ({children}) => {


    // global states
    const [name , setNamne] = useState("Shivraj")





  return (
    <MyContext.Provider value={{name, setNamne}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider
