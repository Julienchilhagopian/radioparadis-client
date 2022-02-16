import styles from '../../styles/Interviews.module.scss'
import React, { Component } from 'react';
import Image from 'next/image';

class Interviews extends Component {

  constructor() {
    super();
  }

  render() {
    let interviews = [
      {
        "title": "Le café comme vecteur de rencontres",
        "shop_name": "café josé",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/rue-paradis.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/set-du-dimanche-antoine-rouaud-12-jan-2022"
      },
      {
        "title": "Le café comme vecteur de rencontres",
        "shop_name": "café josé",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/rue-paradis.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/set-du-dimanche-antoine-rouaud-12-jan-2022"
      },
      {
        "title": "Le café comme vecteur de rencontres",
        "shop_name": "café josé",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/rue-paradis.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/set-du-dimanche-antoine-rouaud-12-jan-2022"
      },
      {
        "title": "Le café comme vecteur de rencontres",
        "shop_name": "café josé",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/rue-paradis.png",
        "link_show": "https://www.lemonde.fr/"
      }
    ]
    return (
      <section className={styles.InterviewsContainer}>
        <div className={styles.imagesContainer}>
          {
            interviews.map((interview, index) => (
              <div key={index} className={styles.imageCard} onClick={()=> window.open(`${interview.link_show}`, "_blank")}>
                <div className={styles.imageContent}>
                  <Image
                    quality={10}
                    src={interview.link_img}
                    alt="Logo"
                    layout="fill"
                  />
                </div>
                <h3>{interview.title}</h3>
                <h3 className={styles.subTitle}>{interview.shop_name}</h3>
              </div>
            ))
          }
        </div>
      </section>
    )
  }
}


export default Interviews