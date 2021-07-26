import styles from '../../styles/BehindRadio.module.scss'
import React, { Component } from 'react';
import Image from 'next/image';
import ColorHeader from '../elements/ColorHeader';  

class BehindRadio extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section>
          <ColorHeader principalColor={this.props.principalColor} title='Derrière la radio' />
          <div className={styles.imagesContainer}>
            <div className={styles.imageCard}>
              <div className={styles.imageContent}>
              <Image 
                quality={40}
                src="/../../public/DSC03104.JPG" 
                alt="Logo" 
                width={600} 
                height={400} 
              />
              </div>
              <div className={styles.imageDescription}>

              </div>
            </div> 
          
          </div> 
      </section>
    )
  }
}


export default BehindRadio