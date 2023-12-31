import React, {Component} from "react";

export default class Estado extends Component{

    state = {
        texto: "Digite"
    }
    
    render(){
        const {texto} = this.state
        return(
            <div>
                <h1>{texto}</h1>
                <input type="text" value={texto} onChange={e => this.setState({texto: e.target.value})} />
            </div>
        )
    }
}