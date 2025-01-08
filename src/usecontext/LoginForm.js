import React, { useState, useEffect } from 'react';

const LoginForm = () => {
  const [data, setData] = useState(null); // Initialize with null or an empty state

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": "dwivedisanidhya99@gmail.com"
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:6000/logout", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.error('Error:', error));
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <div>
      {/* Display the result if data is available */}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Logging out...</p>}
    </div>
  );
};

export default LoginForm;
