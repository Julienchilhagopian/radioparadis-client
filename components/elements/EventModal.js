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
          <h1>Radio Paradis à a Capsule du Badaboum</h1>
          <div className={styles.EventLink}>
            <a href="https://www.facebook.com/share/HHQrJytKP5gp3MhT/" target="_blank"> &rarr; Lien event &larr; </a>
          </div>
          <div className={styles.EventPoster}>
            <Image
              quality={80}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/badaboum.jpg"}
              alt="Logo"
              width={450}
              height={250}
            />
          </div>
          <p className={styles.EventModalCredits}></p>
        </div>
      </Modal>
    );
  };
}

export default EventModal;

