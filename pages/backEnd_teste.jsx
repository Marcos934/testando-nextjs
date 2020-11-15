import { Hook } from "tapable"
import { useState } from "react"


function Home() {
    return <div> home </div>
}


export function Contador(){

    let [contador, setContador] = useState(0);
    let adicionar
    let subtrair
    function adicionarContador(){
      setContador(contador + 1)
      
    }
    function subtrairContador(){
        setContador(contador - 1)
    }

    if(contador>=0 || contador<21){
       
        adicionar =   <button onClick={adicionarContador}>Adicionar</button>
        subtrair  =  <button onClick={subtrairContador}>Subtrair</button>
        
    }
    if(contador<-4){
        subtrair =   <button disabled>Menor que -5 Não é Permitido</button> 
       
    }
    if(contador>=20){
        adicionar =   <button disabled>Maior que 20 Não é permitido</button>
    }

    return(
        <div>
            <div><h1>{contador}</h1></div>
            {adicionar}
            {subtrair}
           
        </div>
    )
}


export default Home