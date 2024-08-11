'use client'

import React from "react";
import styles from '../styles/textTicker.module.scss';
import useSWR from "swr";

type propsType = {
  content: string
}

function TextTicker(props: propsType) {

  return (
    <div className={styles.tickerContainer}>
      <h3 className={styles.tickerAnimation}>
        <span>{props.content}</span>
      </h3>
    </div>
  )
}

export default TextTicker
