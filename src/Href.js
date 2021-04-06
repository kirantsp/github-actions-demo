import React, { useState } from 'react';
const Href = () => {
  const [data, setData] = useState({
    text: '',
  });
const handleType = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
return (
    <div>
      <input
        type='text'
        name='text'
        value={data.text}
        onChange={(e) => handleType(e)}
      />
      <a href={data.text}>click Here</a>
    </div>
  );
};
export default Href;