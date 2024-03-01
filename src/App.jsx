import { useState } from "react";
import SeuNome from "./components/SeuNome";
import Saudacao from "./components/Saudacao";

function App() {

  const [name, setName] = useState()

  return (
    <div className="App">
      <h1>Testando State Lift</h1>
      <SeuNome setName={setName} />
      <Saudacao name={name}/>
    </div>
  );
}

export default App;