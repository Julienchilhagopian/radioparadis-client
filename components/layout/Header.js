import styles from '../../styles/Header.module.scss';
import React, { Component } from 'react';
import CarouselComponent from '../elements/CarouselComponent';
import Logo from '../elements/Logo';



class Header extends Component {

  render() {
    return (
      <section className={styles.header}>
            <Logo size={70} />

        <div className={styles.carouselContainer}>
          <CarouselComponent />
        </div>
      </section>
    )
  }
}



export default Header