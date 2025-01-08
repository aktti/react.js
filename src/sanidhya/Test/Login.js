import React, { useState } from 'react';

const Login = () => {
  const [email,setEmail]  = useState('');
  const [pass, setPass]   = useState('');
  const [data, setData]   = useState('');

  const submit = () => {
    console.log(email);
    setData(`Email: ${email}, Password: ${pass}`);
  };

  const register = () => {
    console.log(pass);
    // You can add the registration logic here
  };

  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      <input 
        type='text' 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type='password' 
        placeholder="Password" 
        value={pass} 
        onChange={(e) => setPass(e.target.value)} 
      />
      <button onClick={submit}>Submit</button>
      <button onClick={register}>Register</button>
      <p>{data}</p>
    </div>
  );
};

export default Login;
