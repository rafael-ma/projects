import OutraLista from "./components/OutraLista";

function App() {

  const meusItens = ['React', 'Vue', 'Angular'] 

  return (
    <div className="App">
      <h1>Testando Renderização de listas</h1>
      <OutraLista itens={meusItens} />
    </div>
  );
}

export default App;