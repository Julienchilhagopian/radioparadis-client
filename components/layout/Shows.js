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
        "title": "FAMILY APPROVED SHOW #2",
        "artist_name": "DJ Suspect",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/fam_app_2.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/family-approved-show-2-w-dj-suspect"
      },
      {
        "title": "DIAC SHOW #6",
        "artist_name": "Djilali (Discolaincourt)",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/diac_6.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/diac-show-6-w-djilali-discolaincourt"
      },
      {
        "title": "Fem In Mix #1",
        "artist_name": "M.A.M",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/feminmix_1.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/fem-in-mix-1-w-mam?in=radio-paradis-13/sets/fem-in-mix-par-anais-chilou"
      },
      {
        "title": "SPIRALE BLEUE #1",
        "artist_name": "Clara Samson",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/sp_1.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/spirale-bleue-1-clara-samson?in=radio-paradis-13/sets/spirale-bleue-par-clara-samson"
      },
      {
        "title": "DERRIERE LES NOTES #4",
        "artist_name": "J.O.S.H.U.A",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/dln_4.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/derriere-les-notes-4-w-joshua"
      },
      {
        "title": "BOUNCE FM #2",
        "artist_name": "Guèze",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/bounce_fm_2.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/bounce-fm2-gueze"
      },
      {
        "title": "QUIRKS #7",
        "artist_name": "Chich",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/quirks_7.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/radio-paradis-chich"
      },
      {
        "title": "FAMILY APPROVED SHOW #1",
        "artist_name": "PolEm",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/family_app_1.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/family-approved-show"
      },
      {
        "title": "TRANSMISSION ELECTRONIQUE #3 - Special Free Party ",
        "artist_name": "Louis Reine w/ Ilian",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/trans_elec_3.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/transmission-electronique-5-special-free-party"
      },
      {
        "title": "KASPER SHOW #6",
        "artist_name": "Lascar",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/kasper_6.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/kasper-show-6-w-lascar"
      },
      {
        "title": "DIAC SHOW #5 - (Part 2)",
        "artist_name": "Luna Kolinka",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/diac_5_pt2.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/diac-show-luna"
      },
      {
        "title": "DIAC SHOW #5 - (Part 1)",
        "artist_name": "Mon Cher Guy",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/diac_5_pt1.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/diac-show-mon-cher-guy"
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