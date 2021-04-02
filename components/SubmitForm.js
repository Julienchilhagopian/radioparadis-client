import { Component } from 'react';
import { Modal } from 'antd';

class SubmitForm extends Component {
  
  render() {
    const showHideClassName = this.props.show ? "modal displayOn" : "modal displayOff";
    return (

      <Modal title="Nourissez la radio de vos écoutes" visible={this.props.show} onOk={this.props.handleClose} onCancel={this.props.handleClose} footer={[]}>
       <div className=''>
         <form className='formContent' onSubmit={this.props.handleClose}>
           <label htmlFor="name">Name</label>
           <input id="name" type="text"  required />
           <label htmlFor="street">Rue</label>
           <input id="street" type="text" required />
           <label htmlFor="link">Le lien vers votre pépite musicale</label>
           <input id="link" type="text" required />
           <label htmlFor="comment">Le lien vers votre pépite musicale</label>
           <input id="comment " type="text" required />
           <button type="submit">
            Envoyer au Paradis !
           </button>
         </form>
       </div>
      </Modal>
      
      // <div className={showHideClassName} onClick={this.props.handleClose}>
      //   <div className='modalMain'>
      //     <h2>Nourissez la radio de vos écoutes.</h2>
      //     <form className='formContent' onSubmit={this.props.handleClose}>
      //       <label htmlFor="name">Name</label>
      //       <input id="name" type="text"  required />
      //       <label htmlFor="street">Rue</label>
      //       <input id="street" type="text" required />
      //       <label htmlFor="link">Le lien vers votre pépite musicale</label>
      //       <input id="link" type="text" required />
      //       <label htmlFor="comment">Le lien vers votre pépite musicale</label>
      //       <input id="comment " type="text" required />
      //       <button type="submit">
      //        Envoyer au Paradis !
      //       </button>
      //     </form>
      //   </div>
      // </div>
    );
  };
}

export default SubmitForm;

