import { useState } from "react"
import Header from "./components/Header"
import Resultado from "./components/Resultado";
import './css/estilo.css'
import './css/global.css'



function App() {
  
  //hook - useState - Manilupa o estado da variável
  const[altura, setAltura]=useState(0);
  const [peso,setPeso]=useState(0);
  const[resultado,setResultado]=useState(0);
  const[mostrarResultado,setmostrarResultado]=useState(false);

  //Criando a função calcular imc
  const calcularImc=(e)=>{
    e.preventDefault(); //evita o recarregamento da página
    if (altura > 0 && peso > 0){
      const imc = peso / (altura * altura);
      setResultado(imc.toFixed(2)); //Arredonda para 2 casas decimais
      setmostrarResultado(true); 
    }else{
      alert("Por favor, digite valores validos");
      setmostrarResultado(false);
    }


  }


  return (
    <div className="container">
      <div className="box">
        <Header/>
        <form>
          <div>
            <label htmlfor="Altura"><span>Altura: (exemplo: 1.80)</span></label>
            <input type="number" 
            id="altura"
            placeholder="Digite sua altura"
            value={altura}
            onChange={(e)=> setAltura(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label htmlfor="Peso"><span>Peso: (exemplo: 80)</span></label>
            <input type="number" 
            id="peso"
            placeholder="Digite seu peso"
            value={peso}
            onChange={(e)=> setPeso(parseFloat(e.target.value))}
            />
          </div>
          <button onClick={calcularImc}>Calcular</button>
        </form>
      </div>
      {mostrarResultado &&(
        <Resultado resultado={resultado}/>
      )}
      
    </div>
  )
}

export default App
