import styles from '../styles/Side.module.scss'
import React, { Component } from 'react';

class Side extends Component {

  constructor() {
    super();
  }
  
  render() {
    return (
      <section className={styles.side}>
        <h1>Radio Paradis</h1>
        <p>Chat</p>
      </section>
    )
  }
} 


export default Side