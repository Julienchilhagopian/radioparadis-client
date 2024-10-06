'use client'

import React from "react";
import styles from "../styles/footer.module.scss"
import Link from 'next/link'
import Socials from "./Socials";

function Footer(props: any) {

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLink}>
        {props.menuItems.map((item: any, index: any) => (
          <Link href={item.url}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className={styles.footerContact}>
        <p>Tu as une idée à proposer pour la radio ? Envoie-nous un message !</p>
        <Link href="mailto:13radioparadis@gmail.com">13radioparadis@gmail.com</Link>
      </div>
      <div className={styles.footerSocials}>
        <Socials color={'white'} />
      </div>
      <div className={styles.footerBrand}>
        <h1>RADIO PARADIS</h1>
        <p>Rue de Paradis, 10ème arrondissement</p>
      </div>
    </div>
  )
}

export default Footer
