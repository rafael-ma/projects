import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Raffyta'.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/300x150'

  const nome = 'Calabreso'
  return (
    <div className="App">
      <h1>Procesando JSX</h1>
      <p>Olá {name}</p>
      <p>Soma: {sum(3,6)}</p>
      <img src={url} alt="Imagem aleatória"/>
      <HelloWorld/>
      <SayMyName nome='Raffyta' />
      <SayMyName nome={nome} />

      <Pessoa 
        foto = 'https://via.placeholder.com/150' 
        nome = 'Rafael'
        idade = '19'     
        profissao = 'Trainee' 
      />
    </div>
  );
}

export default App;