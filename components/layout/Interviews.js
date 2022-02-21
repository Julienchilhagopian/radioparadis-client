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
        "title": "Rue de Paradis",
        "shop_name": "Plus belle rue du 10eme",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/rue-de-paradis.JPG",
        "link_show": "https://soundcloud.com/radio-paradis-13/set-du-dimanche-antoine-rouaud-12-jan-2022"
      },
      {
        "title": "DJ SET - Antoine Rouaud",
        "shop_name": "DEEP HOUSE",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/post-djset-tonio.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/set-du-dimanche-antoine-rouaud-12-jan-2022"
      },
      {
        "title": "Les couleurs du 10",
        "shop_name": "Hotel amour",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/hotel-amour.jpg",
        "link_show": "https://soundcloud.com/radio-paradis-13/set-du-dimanche-antoine-rouaud-12-jan-2022"
      },
      {
        "title": "Enregistrement des jingles",
        "shop_name": "Rue de Paradis",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/record-jingles.JPG",
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