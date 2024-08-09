import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Bem-vindo ao React!'
    };
  }

  componentDidMount() {
    console.log('Componente montado!');
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Welcome;
