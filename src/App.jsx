import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Raffyta'.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/300x150'

  return (
    <div className="App">
      <h1>Procesando JSX</h1>
      <p>Olá {name}</p>
      <p>Soma: {sum(3,6)}</p>
      <img src={url} alt="Imagem aleatória"/>
      <HelloWorld/>
    </div>
  );
}

export default App;