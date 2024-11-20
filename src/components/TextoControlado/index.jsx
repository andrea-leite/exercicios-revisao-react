import React, { useState } from 'react';

function TextoControlado() {
  const [texto, setTexto] = useState('');

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <input type="text" value={texto} onChange={handleChange} />
      <p>Você digitou: {texto}</p>
    </div>
  );
}

export default TextoControlado;