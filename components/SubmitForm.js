import { Component } from 'react';
import { Modal } from 'antd';

class SubmitForm extends Component {

  registerSong = async (event) => {
    event.preventDefault()

    const res = await fetch('/api/register-song', {
      body: JSON.stringify({
        name: event.target.name.value, 
        link: event.target.name.link,
        comment: event.target.name.comment
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    
    console.log(event.target.name.value)
    this.props.handleClose();
  }
  
  render() {
    return (
      <Modal title="Nourissez la radio de vos écoutes." visible={this.props.show} onOk={this.props.handleClose} onCancel={this.props.handleClose} footer={[]}>
       <div>
         <form className='formContent' onSubmit={this.registerSong}>
           <input id="name" type="text" placeholder="Qui êtes-vous ?" required />
           <textarea rows="3" id="link" type="text" placeholder="On accepte le nom, le lien ou toute forme de chemin vers votre pépite musicale." required/>
           <textarea id="comment" type="text" placeholder="Ecrivez-nous un petit mot si vous avez envie." />
           <button className='requestBtn' type="submit">
            envoyer au paradis
           </button>
         </form>
       </div>
      </Modal>
    );
  };
}

export default SubmitForm;

