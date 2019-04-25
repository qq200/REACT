import React from 'react'
import Button from './button'



class CountButton extends Button{
    constructor(props){
        super(props)
        this.state={
            disabled: this.state.disabled,
            delay: this.props.delay
        }
        setInterval(()=>{
            this.setState({
                delay: this.state.delay-1,
                disabled: this.state.delay>1 ? true:false
            })
        },1000)
    }

    render(){
        this.text =this.props.text+''+this.state.delay
        return super.render() // super()apeleaza la constructorul din clasa superioara; super. apeleaza la functie
    }

}

export default CountButton