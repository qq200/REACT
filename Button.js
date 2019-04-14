//din package-ul "react" importeaza clasa Component
import React, {Component} from 'react'

class Button extends Component{
    doIt(){
        alert("Yess")
    }
    render(){
        return(
            <button onClick={this.doIt}> OK</button>
        )
    }
}
//pentru ca atl modul sal poata utiliza

export default Button;