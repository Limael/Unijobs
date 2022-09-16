import { useState } from 'react'
import './CampoTexto.css'
const CampoTexto = (props) =>{
    return(
        <div className="campo-texto">
            <input value={props.valor} placeholder={props.placeholder} />
        </div>
    )
}
export default CampoTexto