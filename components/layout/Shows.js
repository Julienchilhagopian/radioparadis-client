import styles from '../../styles/Shows.module.scss'
import React, { Component } from 'react';
import Image from 'next/image';

class Shows extends Component {

  constructor() {
    super();
  }

  render() {
    let shows = [
      {
        "title": "DIAC SHOW #7",
        "artist_name": "Housecall",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/diac_7.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/diac-show-7-w-housecall"
      },
      {
        "title": "DISCO HEAT #1",
        "artist_name": "Feez",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/disco_heat_1.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/disco-heat-1"
      },
      {
        "title": "Derrière Les Notes #5",
        "artist_name": "Maison Blanche",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/DLN_5.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/deriere-les-notes-5-w-maison-blanche"
      },
      {
        "title": "Special Guest",
        "artist_name": "Corsica One",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/special_guest_corsica.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/special-guest-corsica-one"
      },
      {
        "title": "Special Hardgroove",
        "artist_name": "Haüt",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/Haut.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/haut-special-hardgroove"
      },
      {
        "title": "SELECSTASE #1",
        "artist_name": "Antoine",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/selecstase.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/selecstase-1-antoine"
      },
      {
        "title": "MQ RECORDS SHOW #6",
        "artist_name": "Moïse Keane",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/MQ6.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/mq-records-show-6-w-mose-keane"
      },
      {
        "title": "QUIRKS #8",
        "artist_name": "Luz Del Fuego",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/quirks_8.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/quirks-8-w-luz-del-fuego"
      },
      {
        "title": "KASPER SHOW #7",
        "artist_name": "Acyn",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/kasper_7.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/kasper-show-7-w-acyn"
      },
      {
        "title": "LA CASSETTE #1",
        "artist_name": "ChatoB",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/cassette_1.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/la-cassette-1-w-chatob"
      }
    ]
    return (
      <section className={styles.showsSection}>
        <h1>SHOWS</h1>
        <div className={styles.showsContainer}>
          {
            shows.map((show, index) => (
              <div key={index} className={styles.imageCard} onClick={()=> window.open(`${show.link_show}`, "_blank")}>
                <div className={styles.imageContent}>
                  <Image
                    quality={60}
                    src={show.link_img}
                    alt="Logo"
                    layout="fill"
                  />
                </div>
                <h3>{show.title}</h3>
                <h3 className={styles.subTitle}>{show.artist_name}</h3>
              </div>
            ))
          }
        </div>
      </section>
    )
  }
}


export default Shows