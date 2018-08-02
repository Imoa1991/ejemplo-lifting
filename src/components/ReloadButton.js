import React from 'react';

class ReloadButton extends React.Component {
  render() {
  
    return (
      // Registramos el escuchador que recibimos por props. ¡Lifting hecho!
      <button onClick={ this.props.actionToPerform }>{ this.props.label }</button>
    );
  }
}

export default ReloadButton;
