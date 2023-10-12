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
      },
      {
        "title": "SAMEDI 26 AOÛT - POINT ÉPHÉMÈRE",
        "artist_name": "PARADIX PHONIQUE",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/paradix_phonique_affiche.jpg",
        "link_show": "https://fb.me/e/17Ky7iDbu"
      }
    ]
    return (
      <section>
        <div className={styles.imagesContainer}>
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