import React, { Component } from 'react';

class MensagemDeErro extends Component {
  render() {
    const estilo = {
      color: 'red',
      fontWeight: 'bold'
    };

    return <div style={estilo}>{this.props.mensagem}</div>;
  }
}

export default MensagemDeErro;
