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
        "title": "Panorama Radio Show #3",
        "artist_name": "Soulist",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/pan_3.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/panorama-radio-show3"
      },
      {
        "title": "SPIRALE BLEUE #5",
        "artist_name": "Max Duret",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/spirale_bleue_5_post.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/spirale-bleue-5-max-duret"
      },
      {
        "title": "FEM IN MIX #5",
        "artist_name": "DJ MIEL",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/fem_in_mix_5.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/fem-in-mix-5-dj-miel"
      },
      {
        "title": "Gueze",
        "artist_name": "Special Guest",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/gueze.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/gueze"
      },
      {
        "title": "Diac Show #13",
        "artist_name": "Floorfillers",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/diac_show_13.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/diac-show13-floorfillers"
      },
      {
        "title": "MQ Records Show #13",
        "artist_name": "Unsho",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/MQ13.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/mq-records-show13-unsho"
      },
      {
        "title": "Vagabond #2",
        "artist_name": "Collège de la Grange aux Belles",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/vagabond_2.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/vagabond-2"
      },
      {
        "title": "Vagabond #1",
        "artist_name": "Collège de la Grange aux Belles",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/vagabond_1.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/vagabond-1"
      },
      {
        "title": "Derrière Les Notes #12",
        "artist_name": "Ten Fingerz",
        "link_img": "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/DLN_12.png",
        "link_show": "https://soundcloud.com/radio-paradis-13/derriere-les-notes-12-w-ten-fingerz"
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