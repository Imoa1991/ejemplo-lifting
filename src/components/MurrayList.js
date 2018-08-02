import React from 'react';
import RandomMurray from './RandomMurray';
import ReloadButton from './ReloadButton';

class MurrayList extends React.Component {
  constructor(props) {
    super(props);

    // nos aseguramos de que este callback se ejecute siempre sobre el componente enlazándolo a la instancia con "bind"
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.forceUpdate(); // se ejecutará el método `render()` de MurrayList, que hará a su vez que se ejecute de nuevo el método `render()` de los hijos
  }

  render() {
    return (
      <section className="section-murrays">
        <h1>All <del>Cats</del> Murrays Are Beautiful</h1>
        <ul className="section-murrays_list">
          <li><RandomMurray /></li>
          <li><RandomMurray /></li>
          <li><RandomMurray /></li>
        </ul>
        {/* pasamos handleClick al hijo como prop */}
        <ReloadButton actionToPerform={ this.handleClick } label="More murrays"/>
      </section>
    );
  }
}

export default MurrayList;
/*
Lifting: sirve para poder pasarle un metodo (funcion) de un padre a un hijo, el cual luego llamará a la función del padre cuando en el hijo suceda un evento (ejemplo onClick).
Cuando el hijo dispare el evento llamará a la función que le hemos pasado, como la función no esta en el componente hijo sino en el padre, tendremos disponibles todos los objetos o variables del padre y cuando repintemos se repintará el padre con todos sus hijos (cuando hagamos un forceUpdate() o this.setState())
Flujo: 1º el padre le pasa al hijo datos por props y 2º el hijo al ejecutar lo que le han pasado por props estará llamando al padre. Y realmente lo ejecuta el padre no el hijo.
*/
