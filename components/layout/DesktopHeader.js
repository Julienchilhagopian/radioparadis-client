import styles from '../../styles/DesktopHeader.module.scss';
import React, { Component } from 'react';
import CarouselComponent from '../elements/CarouselComponent';


class DesktopHeader extends Component {

  render() {
    return (
      <section className={styles.content}>
        <section className={styles.musicContent}>
          <div className={styles.radioMainHeader}>
            <div className={styles.topBar}>
              {/* <div className={styles.logoClass}>
                <Logo
                  isMorning={this.props.isMorning}
                  isDay={this.props.isDay}
                  isPlaying={this.props.isPlaying}
                  size={150}
                />
              </div> */}
            </div>
          </div>
        </section>

        <div className={styles.carouselContainer}>
          <CarouselComponent />
        </div>
      </section>
    )
  }
}



export default DesktopHeader