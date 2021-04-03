import { Component } from 'react';
import { Modal } from 'antd';

class SubmitForm extends Component {
  
  render() {
    return (
      <Modal title="Nourissez la radio de vos écoutes." visible={this.props.show} onOk={this.props.handleClose} onCancel={this.props.handleClose} footer={[]}>
       <div>
         <form className='formContent' onSubmit={this.props.handleClose}>
           <input id="name" type="text" placeholder="Nom" required />
           <input id="street" type="text" placeholder="Rue" required />
           <input id="link" type="text" placeholder="Le lien vers votre pépite musicale" required />
           <input id="comment" type="text" placeholder="Ecrivez-nous !" required />
           <button className='requestBtn' type="submit">
            Envoyer au Paradis !
           </button>
         </form>
       </div>
      </Modal>
    );
  };
}

export default SubmitForm;

