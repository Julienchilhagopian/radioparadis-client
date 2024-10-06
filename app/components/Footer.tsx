'use client'

import React from "react";
import styles from "../styles/footer.module.scss"
import Link from 'next/link'

function Footer(props: any) {

  return (
    <div className={styles.footerContainer}>
     <div>
      {props.menuItems.map((item: any, index: any) => (
          <Link href={item.url}>
            {item.title}
          </Link>
        ))}
     </div>
     <div>
        <p>Tu as une idée à proposer pour la radio ? Envoie-nous un message !</p>
        <Link href="mailto:13radioparadis@gmail.com">13radioparadis@gmail.com</Link>
     </div>
    </div>
  )
}

export default Footer
