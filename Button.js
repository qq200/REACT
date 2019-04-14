//din package-ul "react" importeaza clasa Component
import React, {Component} from 'react'

let likes=0;

class Button extends Component{
    // constructor(){
    //     this.likes=0;
    // }
    doIt(){
        likes++;
        console.log(this.likes);
    }
    render(){
        return(
            <button onClick={this.doIt}>I like</button>
        )
    }
}
//pentru ca atl modul sal poata utiliza

export default Button;