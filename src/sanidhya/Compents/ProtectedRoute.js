import React from 'react'

const ProtectedRoute = () => {
  
    return  localStorage.getItem("token") ? <Outlet/> :<Navigate to="/"/>

  
}

export default ProtectedRoute