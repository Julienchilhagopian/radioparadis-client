import { Component } from 'react';
import { Modal } from 'antd';
import Image from 'next/image';
import styles from '../../styles/EventModal.module.scss';

class EventModal extends Component {

  constructor() {
    super();
  }

 
  render() {
    return (
      <Modal title="" open={this.props.show} onCancel={this.props.handleModalClose}>
        <div className={styles.EventModalContent}>
          <h1 >Radio Paradis à la Java le 10 Novembre avec Family Approved Records !</h1>
          <div className={styles.EventLink}>
            <a href="https://fb.me/e/1meVwuN7P" target="_blank"> &rarr; Lien event &larr; </a>
          </div>
          <div className={styles.EventPoster}>
            <Image
              quality={80}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/agenda/public/affiche_java_novembre.jpeg"}
              alt="Logo"
              width={286}
              height={407}
            />
          </div>
          <p className={styles.EventModalCredits}></p>
        </div>
      </Modal>
    );
  };
}

export default EventModal;

