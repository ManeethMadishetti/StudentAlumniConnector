import { Container } from '@material-ui/core'
import React from 'react'
import './InputOption.css'
function InputOption({Icon,title,color}) {
    return (
        <Container maxWidth="sm">
        <div className="inputOption">
            <Icon style={{color: color}} />
            <h4>{title}</h4>       
        </div>
        </Container>
        
    )
}

export default InputOption
