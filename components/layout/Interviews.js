import styles from '../../styles/Interviews.module.scss'
import React, { Component } from 'react';
import ColorHeader from '../elements/ColorHeader';
import Logo from '../elements/Logo';

class Interviews extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section className={styles.interviews}>
        <div className={styles.interviewsHeader}>
          <ColorHeader principalColor={this.props.principalColor} title='Rencontres' />
        </div>
        <div className={styles.interviewsContent}>
          <p>Radio Paradis est née dans une coloc du 10ème arrondissement.</p>
          <p>C'est un nouveau canal qui traversera le quartier. Un canal dédié à l'échange de musiques et d'idées.</p>
          <p>Cet été, la radio part à la rencontre des commercants et des habitants de cette ville.</p>
          <p>On a tous une histoire à raconter, nous essayons de les rassembler.</p>
        </div>
        <div>
          <div className={styles.mail}>
            <a href="mailto:bonjour@radioparadis.com">bonjour@radioparadis.com</a>
          </div>
          <Logo
            isMorning={this.props.isMorning}
            isDay={this.props.isDay}
            isPlaying={this.props.isPlaying}
            size={50}
          />
        </div>
      </section>
    )
  }
}


export default Interviews