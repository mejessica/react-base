import React from "react";
import './button.css'

const cliqueAqui = (label) => {
    alert(`a label desse botao é "${label}"`)
}

const Button = ({label, color}) => {
    return <button 
    className="btn" 
    onClick={()=>cliqueAqui(label)}
    style={{backgroundColor:color}}>Clique aqui
    </button> 
}


export default Button