import { useState } from "react"

function App(){

    const [nome, setNome] = useState('Ronaldo')

  return (
    <div>
      <h3>Pizzaria 2D</h3>

      <input 
       className="nome"
       onChange={(e)=>{setNome(e.target.value)}}
       type="text" />
    
    <button
      className="botao"
      onClick={()=>{alert(nome)}}
    >
      CLIQUE AQUI
    </button>

    </div>
  )
}

export default App
