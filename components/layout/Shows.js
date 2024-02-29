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
        "title": "Discussion avec Sarah Fryde (foncière solidaire Base Commune)",
        "artist_name": "Plateau Radio Paradis aux Amarres",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/poster_sarah.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/discussion-avec-sarah-fryde-fonciere-solidaire-base-commune"
      },
      {
        "title": "Closing de C.LYYA",
        "artist_name": "Plateau Radio Paradis aux Amarres",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/closing_clyya.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/dj-set-clya"
      },
      {
        "title": "Salade Radio Paradis crew",
        "artist_name": "Plateau Radio Paradis aux Amarres",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/rp_crew.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/dj-set-rp"
      },
      {
        "title": "Les radios libres : l'épopée de la libération des ondes dans les années 70/80",
        "artist_name": "Plateau Radio Paradis aux Amarres",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/radio_libres.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/radios-libres"
      },
      {
        "title": "Diac Show #10",
        "artist_name": "Koudur (Bold House)",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/diac_show_10.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/koudur"
      },
      {
        "title": "Kasper Show #11",
        "artist_name": "Laluis",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/kasper_11.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/laluis-radioparadiswav"
      },
      {
        "title": "Oups, I Played It Again #1",
        "artist_name": "Adou",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/oups_1.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/oups-i-played-it-again-1"
      },
      {
        "title": "Disco Heat #4",
        "artist_name": "Relight Crew",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/disco_heat_4.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/disco-heat-4"
      },
      {
        "title": "DERRIÈRE LES NOTES #8",
        "artist_name": "DJ Software",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/DLN_8.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/dj-software"
      },
      {
        "title": "MQ RECORDS SHOW #9",
        "artist_name": "POLOPONNÈSE",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/MQ9.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/poloponese"
      },
      {
        "title": "Fem In Mix #3",
        "artist_name": "SYSTEM SOL",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/fem_in_mix_3.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/fem-in-mix-3-w-system-sol"
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