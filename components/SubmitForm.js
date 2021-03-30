import { Component } from 'react';

class SubmitForm extends Component {
  
  render() {
    const showHideClassName = this.props.show ? "modal displayOn" : "modal displayOff";
    return (
      <div className={showHideClassName} onClick={this.props.handleClose}>
        <section className='modalMain'>
          <p>TEXTE</p>
          <button type="button" onClick={this.props.handleClose}>
            Envoyer au Paradis !
          </button>
        </section>
      </div>
    );
  };
}

export default SubmitForm;

