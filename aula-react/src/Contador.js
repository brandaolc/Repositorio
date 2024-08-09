import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: props.inicial
    };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default Contador;
