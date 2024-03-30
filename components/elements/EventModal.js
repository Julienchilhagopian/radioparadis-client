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
          <h1>Plateau Radio Paradis #2 aux Amarres !</h1>
          <div className={styles.EventLink}>
            <a href="https://fb.me/e/1Py5w2FwF" target="_blank"> &rarr; Lien event &larr; </a>
          </div>
          <div className={styles.EventPoster}>
            <Image
              quality={80}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/lesamarres_affiche.jpg"}
              alt="Logo"
              //fill={true}
              width={350}
              height={445}
            />
          </div>
          <p className={styles.EventModalCredits}></p>
        </div>
      </Modal>
    );
  };
}

export default EventModal;

