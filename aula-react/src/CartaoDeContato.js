import React, {Component} from 'react'

class CartaoDeContato extends Component{
    render(){
        return(
            <div>
        
         <h2>{this.props.nome}</h2>
         <p>Email: {this.props.email}</p>
         <p>Telefone: {this.props.telefone}</p>
            </div>
        );
    }
} 

export default CartaoDeContato
