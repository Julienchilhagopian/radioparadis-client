import styles from '../../styles/ColorHeader.module.scss'
import React, { Component } from 'react';

class ColorHeader extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <h1 className={styles.trackHistoryHeader} style={{ 'color': this.props.principalColor }} >{this.props.title}</h1>
    )
  }
}


export default ColorHeader