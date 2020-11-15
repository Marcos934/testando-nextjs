import { Hook } from "tapable"
import { useState } from "react"


class Funcoes {
    
}

function Home() {
    return <div> home </div>
}


export function Contador(){
 let [contador, setContador] = useState(0);

    function adicionarContador(){
      setContador(contador + 1)
      
    }


    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionou</button>
        </div>
    )
}


export default Home