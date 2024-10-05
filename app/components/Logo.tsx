'use client'

import React from "react";
import Image from 'next/image'
import { PlayContext } from '../context/playContext'; 
import { useContext } from "react";
import styles from '../styles/logo.module.scss';

function Logo(props: any) {
  const logoUrl = 'https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/logo-night.png';
  const { playing, setPlaying } = useContext(PlayContext);

  return (
    <div>
     {
      <Image className={(playing) ? styles.logoRotate : ""} src={logoUrl} alt="Logo" width={props.size} height={props.size} />
      }
    </div>
  )
}

export default Logo
