import React, {Component} from "react";

export default class MousePosition extends Component{
    state ={
        x: 0,
        y: 0
    }

    move(){
        document.addEventListener('mousemove', (e) => {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        })
    }

    render(){
        const {x, y} = this.state
        this.move()
        return(
            <div>
            <h1>Posicao do Mouse:</h1>
            <h2>X: {x}</h2>
            <h2>Y: {y}</h2>
            </div>
        )
    }
}