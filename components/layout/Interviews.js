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
        "title": "DIMANCHE 28 AOÛT - POINT ÉPHÉMÈRE",
        "shop_name": "QUE DU 10",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/QUEDU10_low.png",
        "link_show": "https://www.facebook.com/events/5268951943181938
        "
      },
      {
        "title": "Curieuse cave - 11 Rue de la Fidélité",
        "shop_name": "RENCONTRE DE QUARTIER",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/curieuse-cave-itw-min2.jpg",
        "link_show": "https://soundcloud.com/radio-paradis-13/rencontre-de-quartier-curieuse-cave"
      },
      {
        "title": "Curieuse cave - 11 Rue de la Fidélité",
        "shop_name": "RENCONTRE DE QUARTIER",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/curieuse-cave-itw-min.jpg",
        "link_show": "https://soundcloud.com/radio-paradis-13/rencontre-de-quartier-curieuse-cave"
      },
      {
        "title": "Philippe le Libraire - 32 Rue des Vinaigriers",
        "shop_name": "RENCONTRE DE QUARTIER",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/philippe-libraire2.png",
        "link_show": "https://www.mixcloud.com/radioparadis/rencontre-de-quartier-philippe-le-libraire/"
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
                    quality={60}
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