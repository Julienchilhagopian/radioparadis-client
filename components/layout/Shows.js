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
        "title": "Girl From The Beyond",
        "artist_name": "Simon Bijaoui",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/simon_bij.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/simon-bijaoui-presente-girl-from-the-beyond"
      },
      {
        "title": "Diac Show #8",
        "artist_name": "Robinson",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/diac_8.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/diac-show-8-w-robinson"
      },
      {
        "title": "Family Approved Show #4",
        "artist_name": "Laura Super",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/fam_app_4.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/family-approved-show-4-w-laura-super"
      },
      {
        "title": "Derrière les Notes #6",
        "artist_name": "Loryn",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/DLN_6.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/derriere-les-notes-6-w-loryn"
      },
      {
        "title": "SPIRALE BLEUE #2",
        "artist_name": "Nessiel",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/spirale_bleue_2.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/spirale-bleue-2-w-nessiel"
      },
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