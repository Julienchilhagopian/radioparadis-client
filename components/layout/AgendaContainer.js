import styles from '../../styles/AgendaContainer.module.scss'
import React, { Component } from 'react';

class AgendaContainer extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <section>
        <div className={styles.AgendaContainer}>
          <h1>AGENDA</h1>
          
        </div>
      </section>
    )
  }
} 


export default AgendaContainer