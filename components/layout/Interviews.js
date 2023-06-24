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
        "title": "Victor Tomasi",
        "shop_name": "DERRIERE LES NOTES #1",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/DERRIERE_LES_NOTES_1.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/sets/derriere-les-notes"
      },
      {
        "title": "Tomasi Brothers présentent Rythm Diaries",
        "shop_name": "Rythm Diaries",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/rythm_diaries.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/tomasi-brothers"
      },
      {
        "title": "QUI SI FA ROMA #3",
        "shop_name": "GUINEVERE",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/QUI_SI_FA_ROMA_3.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/qui-si-fa-roma-3-guinevere"
      },
      {
        "title": "QUI SI FA ROMA #2",
        "shop_name": "AVA ALAMI",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/QUI_SI_FA_ROMA_2.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/qui-si-fa-roma-2-ava-alami"
      },
      {
        "title": "QUI SI FA ROMA #1",
        "shop_name": "ROBERTA STRADA",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/QUI_SI_FA_ROMA_1.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/qui-si-fa-roma-1-roberta-strada"
      },
      {
        "title": "RÉSIDENCE FUNKY GIGI",
        "shop_name": "REPLAY",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/story_replay.png",
        "link_show": "https://soundcloud.com/j-r-my-berloty/sets"
      },
      {
        "title": "MAYFLO",
        "shop_name": "REPLAY",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/MAYFLO.png",
        "link_show": "https://soundcloud.com/j-r-my-berloty/mayflo-dj-set-for-radio-paradis"
      },
      {
        "title": "C-LYYA (MQ Records)",
        "shop_name": "REPLAY",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/C-LYYA.png",
        "link_show": "https://soundcloud.com/j-r-my-berloty/clyya-dj-set-mq-records"
      },
      {
        "title": "FARID (On Verra Music)",
        "shop_name": "REPLAY",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/farid.png",
        "link_show": "https://soundcloud.com/j-r-my-berloty/farid-radio-paradis-9-2-2023wav"
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