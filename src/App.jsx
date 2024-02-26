import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  const name = 'Raffyta'.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/300x150'

  const nome = 'Calabreso'
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento />
      <Form />
    
    
    </div>
  );
}

export default App;