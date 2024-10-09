'use client'

import React from "react";
import styles from '../styles/textTicker.module.scss';

type propsType = {
  content: string
}

function TextTicker(props: propsType) {

  return (
    <div className={styles.tickerContainer}>
      <p className={styles.tickerAnimation}>
        <span>{props.content}</span>
      </p>
    </div>
  )
}

export default TextTicker
