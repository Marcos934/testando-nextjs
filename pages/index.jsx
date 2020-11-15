import { Home, Contador } from "./backEnd_teste"


function Capslock(props) {
    const textoNormal = props.children
    const textoCapslock = textoNormal.toUpperCase()
    return textoCapslock
}



export default function Pagina() {
    return (
        <div>
            <div>
                < Capslock>
                    <Contador />
                </ Capslock>
            </div>
            <hr />
            <div>

            </div>

        </div>
    )
}






