import React, { useState } from 'react';

export default function Home() {
  const [number, setNumber] = useState(null);
  const generate = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };
  
  return (
    <div>
      <h2>Random Number Generator</h2>
      <button onClick={generate}>Generate</button>
      {number && <p>Generated Number: {number}</p>}
    </div>
  );
}
