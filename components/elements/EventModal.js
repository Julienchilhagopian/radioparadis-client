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
            <a href="https://www.facebook.com/events/la-java/family-approved-invite-dj-suspect-random-et-radio-paradis/1244699469536918/" target="_blank"> &rarr; Lien event &larr; </a>
          </div>
          <div className={styles.EventPoster}>
            <Image
              quality={80}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/affiche_java_novembre.jpeg"}
              alt="Logo"
              width={300}
              height={300}
            />
          </div>
          <p className={styles.EventModalCredits}></p>
        </div>
      </Modal>
    );
  };
}

export default EventModal;

