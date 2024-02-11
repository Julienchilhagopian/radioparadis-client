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
        "title": "Bounce FM #5",
        "artist_name": "Nightchou",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/bounce_fm_5.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/simon-bijaoui-presente-girl-from-the-beyond"
      },
      {
        "title": "Quirks #10",
        "artist_name": "Nickname",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/quirks_10.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/quirks-w-nickname"
      },
      {
        "title": "SPIRALE BLEUE #3",
        "artist_name": "CLEFT",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/spirale_bleue_3.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/spirale-bleue-3-w-cleft"
      },
      {
        "title": "Family Approved Show #5",
        "artist_name": "Todd Yeni - Special Kerri Chandler Unreleased",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/fam_app_5.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/family-approved-show-5-w-todd-yeni-special-kerri-chandler-unreleased"
      },
      {
        "title": "Groovence Show #2",
        "artist_name": "Moonee",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/groovence_2.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/groovence-show-2-w-moonee"
      },
      {
        "title": "Diac Show #9",
        "artist_name": "Axone",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/diac_show_9.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/diac-show-9-w-axone"
      },
      {
        "title": "Special middle east 80s and 90s beat",
        "artist_name": "Zareen",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/zareen.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/zareen-special-middle-east-80s-and-90s-beat"
      },
      {
        "title": "Disco Heat #3",
        "artist_name": "Feez",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/disco_heat_3.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/disco-heat-3-w-feez"
      },
      {
        "title": "SELECSTASE #2",
        "artist_name": "DJ ECO & DJ SRA",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/SELECSTASE_2.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/selecstase-2-dj-eco-dj-sra"
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