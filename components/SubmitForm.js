import { Component } from 'react';
import { Modal } from 'antd';

class SubmitForm extends Component {

  constructor(){
    super();

    this.state = {
      input_clicked: false, 
      textarea1_clicked: false, 
      textarea2_clicked: false,
    }
}

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

  changeColorInput = () => {
      this.setState({input_clicked: !this.state.input_clicked});
      this.setState({textarea1_clicked: false});
      this.setState({textarea2_clicked: false});
  }

  changeColorTextarea1 = () => {
    this.setState({input_clicked: false});
    this.setState({textarea1_clicked: !this.state.textarea1_clicked});
    this.setState({textarea2_clicked: false});
  }

  changeColorTextarea2 = () => {
    this.setState({input_clicked: false});
    this.setState({textarea1_clicked: false});
    this.setState({textarea2_clicked: !this.state.textarea2_clicked});
  }

  render() {
    let input_border = this.state.input_clicked ? '3px solid ' + this.props.principalColor : "3px solid black";
    let textarea1_border = this.state.textarea1_clicked ? '3px solid ' + this.props.principalColor : "3px solid black";
    let textarea2_border = this.state.textarea2_clicked ? '3px solid ' + this.props.principalColor : "3px solid black";

    return (
      <Modal title="Nourissez la radio de vos écoutes." visible={this.props.show} onOk={this.props.handleClose} onCancel={this.props.handleClose} footer={[]}>
       <div>
         <form className='formContent' onSubmit={this.registerSong}>
           <input 
              onClick={this.changeColorInput}
              style={{'borderBottom': input_border}}  
              id="name" 
              type="text" 
              placeholder="Qui êtes-vous ?" 
              required 
              />
           <textarea 
              onClick={this.changeColorTextarea1}
              style={{'borderBottom': textarea1_border}}  
              rows="3" 
              id="link" 
              type="text" 
              placeholder="On accepte le nom, le lien ou toute forme de chemin vers votre pépite musicale." 
              required/>
           <textarea 
              onClick={this.changeColorTextarea2}
              style={{'borderBottom': textarea2_border}}  
              id="comment" 
              type="text" 
              placeholder="Ecrivez-nous un petit mot si vous avez envie." 
              />
           <button style={{'backgroundColor': this.props.principalColor}} className='requestBtn' type="submit">
            envoyer au paradis
           </button>
         </form>
       </div>
      </Modal>
    );
  };
}

export default SubmitForm;

