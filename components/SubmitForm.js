import { Component } from 'react';
import { Modal } from 'antd';

class SubmitForm extends Component {

  registerSong = async (event) => {
    event.preventDefault()

    const res = await fetch('/api/registerSong', {
      body: JSON.stringify({
        name: event.target.name.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    // result.user => 'Ada Lovelace'
    
    console.log(event.target.name.value)
    this.props.handleClose();
  }
  
  render() {
    return (
      <Modal title="Nourissez la radio de vos écoutes." visible={this.props.show} onOk={this.props.handleClose} onCancel={this.props.handleClose} footer={[]}>
       <div>
         <form className='formContent' onSubmit={this.registerSong}>
           <input id="name" type="text" placeholder="Nom" required />
           <input id="street" type="text" placeholder="Rue" />
           <input id="link" type="text" placeholder="Le lien vers votre pépite musicale" />
           <input id="comment" type="text" placeholder="Ecrivez-nous !" />
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

