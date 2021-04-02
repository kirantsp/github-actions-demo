import React, { useState } from 'react';
const Eval = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
  });
const handleType = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = () => {
    
    console.log("done");
  };
return (
    <div>
      <input
        type='text'
        name='firstName'
        value={data.firstName}
        onChange={(e) => handleType(e)}
      />
      <input
        type='text'
        name='lastName'
        value={data.lastName}
        onChange={(e) => handleType(e)}
      />
      <button onClick={() => handleSubmit()}>Submit</button>{' '}
    </div>
  );
};
export default Eval;