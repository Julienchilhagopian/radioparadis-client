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
          <h1 >Radio Paradis à la Rotonde le 26 octobre !</h1>
          <div>
            <a href="https://fb.me/e/1meVwuN7P" target="_blank"> &rarr; Lien event &larr; </a>
          </div>
          <Image
            quality={80}
            src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/agenda/public/affiche_rotonde_octobre.jpg"}
            alt="Logo"
            width={150}
            height={300}
          />
        </div>
      </Modal>
    );
  };
}

export default EventModal;

