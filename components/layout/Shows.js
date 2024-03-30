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
        "title": "Kasper Show #12",
        "artist_name": "DONNIE TABASCO",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/kasper_12_2.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/kasper-show-12-part-2"
      },
      {
        "title": "DISCO HEAT #5",
        "artist_name": "JIMMY DISCO",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/disco_heat_5.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/disco-heat-5"
      },
      {
        "title": "KASPER SHOW #12",
        "artist_name": "PETRUS",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/kasper_12_1.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/240202-petrus"
      },
      {
        "title": "DERRIÈRE LES NOTES #9",
        "artist_name": "CONTRECOEUR",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/DLN_9.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/contrecoeur"
      },
      {
        "title": "QUIRKS #11",
        "artist_name": "DOMICIL",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/quirks_11.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/domicil-mix1"
      },
      {
        "title": "FAMILY APPROVED SHOW #7",
        "artist_name": "DIELLI",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/fam_app_7.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/dielli"
      },
      {
        "title": "OUPS, I PLAYED IT AGAIN ! #2",
        "artist_name": "ADOU",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/oups_2.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/oups-2"
      },
      {
        "title": "SELECSTASE #3",
        "artist_name": "Antoine",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/SELECSTASE_3.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/antoine-3"
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