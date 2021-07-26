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
                  quality={40}
                  src="https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/logo-day.png" 
                  alt="Logo" 
                  width={600} 
                  height={400} 
                />
              </div>
              <div className={styles.imageDescription}>
                <h2>La radio existe aussi grâce au Jardin.</h2>
                <p>Jardin Villemin</p>
              </div>
            </div> 

            <div className={styles.imageCardMiddle}>
              <div className={styles.imageContent}>
                <Image 
                  quality={40}
                  src="https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/logo-day.png" 
                  alt="Logo" 
                  width={600} 
                  height={400} 
                />
              </div>
              <div className={styles.imageDescription}>
                <h2>Enregistrement des jingles.</h2>
                <p>Rue de Paradis</p>
              </div>
            </div> 

            <div className={styles.imageCardEnd}>
              <div className={styles.imageContent}>
                <Image 
                  quality={40}
                  src="https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/logo-day.png" 
                  alt="Logo" 
                  width={600} 
                  height={400} 
                />
              </div>
              <div className={styles.imageDescription}>
                <h2>Enregistrement des jingles.</h2>
                <p>Rue de Paradis</p>
              </div>
            </div> 
          
          </div> 
      </section>
    )
  }
}


export default BehindRadio