'use client'
import React from "react";
import Fade from 'embla-carousel-fade'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../styles/carousel.module.scss';
import Autoplay from 'embla-carousel-autoplay'
import { useContext } from "react";
import { PlayContext } from '../context/playContext';

import Image from 'next/image';



function Carousel(props: any) {

  const { replayUrl, setReplayUrl } = useContext(PlayContext);
  const { playingReplay, setPlayingReplay } = useContext(PlayContext);

  const getImageUrl = (url: string) => {
    const clean_url = url.replace(
      'large',
      't3000x3000'
    )
    return clean_url
  }


  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Fade(),
    Autoplay()
  ])


  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {
          props.tracks.length > 0 ? (
            props.tracks.slice(0, 5).map((episode: any) => (
              <div className={styles.embla__slide} key={episode.id} onClick={() => {
                setReplayUrl(episode.permalink_url)
                setPlayingReplay(true)
              }
              }>
                <div>
                  <Image
                    quality={100}
                    src={getImageUrl(episode.artwork_url)}
                    alt="Episode image"
                    fill={true}
                    className={styles.embla__slide__img}
                  />
                </div>
              </div>
            ))
          )
            :
            <div></div>
        }
      </div>
    </div>
  )
}

export default Carousel
