import styles from '../styles/Interviews.module.scss'
import React, { Component } from 'react';
import ColorHeader from './ColorHeader';
import Logo from './Logo';

class Interviews extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <section className={styles.interviews}>
        <div className={styles.interviewsHeader}>
          <ColorHeader principalColor={this.props.principalColor} title='Rencontres'/>
        </div>
        <div className={styles.interviewsContent}>
          <p>Radio Paradis est née dans une coloc du 10ème arrondissement.</p>
          <p>Un nouveau canal traversera ce quartier. Un canal dédié à l'échange de musiques et d'histoires.</p>
          <p>Cet été, la radio ira à la rencontre des commercants et des habitants du 10ème.</p>
          <p>On a tous une histoire à raconter, écrivez-nous et nous porterons la votre.</p>
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