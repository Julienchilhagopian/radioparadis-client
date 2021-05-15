import styles from '../styles/Chat.module.scss'
import React, { Component } from 'react';

class Chat extends Component {

  constructor() {
    super();
  }


  componentDidMount() {
    const script = document.createElement("script");    
    script.async = true;    
    script.src = "http://tlk.io/embed.js";  
    script.type = "text/javascript";
    this.div.appendChild(script);  
  }
  
  render() {
    return (
      <div className={styles.chatContainer}>
          <div className={styles.chat} id="tlkio" data-channel="radioparadis"></div>
          <div className="chat" ref={el => (this.div = el)}></div>
      </div>
    )
  }
} 


export default Chat