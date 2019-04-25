/// modul=component=object
import React from 'react'
import './button.css'
class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={
            disable: this.props.disabled
        }
        this.text=this.props.text;
    }

    render(){
        let styles={}
        
        if(this.props.type=="danger"){
            styles={
                backgroundColor:"red"
            }
        }
        //formatare jsx
        return <button className="my-button" style={styles} disabled={this.state.disabled}>{this.text}</button>
    }

}
export default Button