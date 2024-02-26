import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const name = 'Raffyta'.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/300x150'

  const nome = 'Calabreso'
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <p>Olá {name}</p>
      <p>Soma: {sum(3,6)}</p>
      <img src={url} alt="Imagem aleatória"/>
      <HelloWorld/>
      <Frase />
      <Frase /> 
      <SayMyName nome='Raffyta' />
      <SayMyName nome={nome} />

      <Pessoa 
        foto = 'https://via.placeholder.com/150' 
        nome = 'Rafael'
        idade = '19'     
        profissao = 'Trainee' 
      />

      <List />
    </div>
  );
}

export default App;