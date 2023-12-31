import React from "react";
import Filho from "./Filho";

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <Filho {...props} nome="Marcos"/>
        <Filho {...props} nome="Ana"/>
    </div>