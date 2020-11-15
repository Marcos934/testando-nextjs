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
                <Contador />
            </div>
            <hr />
            <div>
                < Capslock>texto</ Capslock>
            </div>

        </div>
    )
}






