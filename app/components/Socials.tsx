'use client'

import React from "react";
import Image from 'next/image'
import styles from '../styles/socials.module.scss';

function Socials(props: any) {

  return (
    <div className={styles.radioHeaderSocials}>
      <div onClick={() => window.open(`${"https://soundcloud.com/radio-paradis-13"}`, "_blank")}>
        <div>
          <Image
            quality={80}
            src={`https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/soundcloud_logo_${props.color}.png`}
            alt="Logo"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div onClick={() => window.open(`${"https://open.spotify.com/playlist/08wmfh933ZtrExQNbCFbyQ?si=a895de757a9947b9"}`, "_blank")}>
        <div>
          <Image
            quality={80}
            src={`https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/spotify_logo_${props.color}.png`}
            alt="Logo"
            width={30}
            height={30}
          />
        </div>
      </div>
      <div onClick={() => window.open(`${"https://www.instagram.com/radioparadis/"}`, "_blank")}>
        <div>
          <Image
            quality={80}
            src={`https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/instagram_logo_${props.color}.png`}
            alt="Logo"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  )
}

export default Socials
