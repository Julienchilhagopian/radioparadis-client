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
          <h1>Radio Paradis avec Victor Tomasi à l'Alimentation Générale !</h1>
          <div className={styles.EventLink}>
            <a href="https://www.facebook.com/share/hzkBZA2fWK1U5SKs" target="_blank"> &rarr; Lien event &larr; </a>
          </div>
          <div className={styles.EventPoster}>
            <Image
              quality={80}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/event_pic.jpeg"}
              alt="Logo"
              width={350}
              height={450}
            />
          </div>
          <p className={styles.EventModalCredits}></p>
        </div>
      </Modal>
    );
  };
}

export default EventModal;

