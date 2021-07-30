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
          <div className={styles.headerContainer}>
            <ColorHeader principalColor={this.props.principalColor} title='Derrière la radio'/>
          </div> 
          <div className={styles.imagesContainer}>
            <div className={styles.imageCard}>
              <div className={styles.imageContent}>
                <Image 
                  quality={10}
                  src="https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/jardin-villemin.png" 
                  alt="Logo" 
                  layout="fill"
                />
              </div>
              <div className={styles.imageDescription}>
                <h2>La radio c'est aussi les conversations du jardin</h2>
                <p>Jardin Villemin</p>
              </div>
            </div> 

            <div className={styles.imageCardMiddle}>
              <div className={styles.imageContent}>
                <Image 
                  quality={10}
                  src="https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/record-jingles.png" 
                  alt="Logo" 
                  layout="fill"
                />
              </div>
              <div className={styles.imageDescription}>
                <h2>Enregistrement des jingles</h2>
                <p>Rue de Paradis</p>
              </div>
            </div> 

            <div className={styles.imageCardEnd}>
              <div className={styles.imageContent}>
                <Image 
                  quality={10}
                  src="https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/rue-paradis.png" 
                  alt="Logo" 
                  layout="fill"
                />
              </div>
              <div className={styles.imageDescription}>
                <h2>La plus belle rue du 10ème</h2>
                <p>Rue de Paradis</p>
              </div>
            </div> 
          
          </div> 
      </section>
    )
  }
}


export default BehindRadio