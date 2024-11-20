import { useState } from "react";
import HobbyList from "./components/HobbyList";
import InfoCard from "./components/InfoCard";

function App() {
  const meusHobbies = ['Leitura', 'Passeio em família', 'Artesanato', 'Programação']
  const [texto, setTexto] = useState('');
  const [contador, setContador] = useState(0);
  const handleChange = (event) => {
    setTexto(event.target.value);
  };
  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <div className="App">
      <InfoCard title={"Primeiro Card"} description={"Descrição do card"} />
      <InfoCard title={"Segundo Card"} description={"Descrição do segundo card"} />
      <HobbyList hobbies={meusHobbies} />

      <h1>Campo de Texto Controlado</h1>
      <input type="text" value={texto} onChange={handleChange} />
      <p>Você digitou: {texto}</p>

      <h1>Contador</h1>
      <p>O botão foi clicado {contador} vezes</p>
      <button onClick={handleClick}>Clique aqui</button>


    </div>
  );
}


export default App;
