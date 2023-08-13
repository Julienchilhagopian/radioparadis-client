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
        "title": "SAMEDI 26 AOÛT - POINT ÉPHÉMÈRE",
        "shop_name": "PARADIX PHONIQUE",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/paradix_phonique_affiche.jpg",
        "link_show": "https://fb.me/e/17Ky7iDbu"
      },
      {
        "title": "MOVE YOUR BOOGIE MODY",
        "shop_name": "Feez",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/mybb.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/sets/move-your-boogie-mody-w-feez"
      },
      {
        "title": "QUIRKS #4",
        "shop_name": "Patimo w/ Tentak<3r",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/quirks_4.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/quirks-4-w-tentakeur"
      },
      {
        "title": "DIAC SHOW #3",
        "shop_name": "Paul Diac w/ FALAFEF",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/diac_show_3.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/diac-show-3-w-falafef"
      },
      {
        "title": "TRANSMISSION ELECTRONIQUE #2",
        "shop_name": "Louis Reine w/ Simon111",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/t_elec_2.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/transmission-electronqie-2-w-simon111"
      },
      {
        "title": "DERRIERE LES NOTES #2",
        "shop_name": "Victor Tomasi",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/DERRIERE_LES_NOTES_2.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/derriere-les-notes-2-w-kazam"
      },
      {
        "title": "QUI SI FA ROMA #4",
        "shop_name": "JEMMA",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/QUI_SI_FA_ROMA_4.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/qui-si-fa-roma-4-jemma"
      },
      {
        "title": "DIMANCHE 28 AOÛT - POINT ÉPHÉMÈRE",
        "shop_name": "QUE DU 10",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/QUEDU10_low.jpeg",
        "link_show": "https://www.facebook.com/events/5268951943181938"
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