import React from 'react'
import './paragrafo.css'

const Paragrafo = ({children, color})=>{
    return(
        <div className="p" style={{backgroundColor:color}}>
           {children}
        </div>
    )
}

export default Paragrafo
