'use client'
import React from "react";
import Fade from 'embla-carousel-fade'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../styles/carousel.module.scss';
import Autoplay from 'embla-carousel-autoplay'
import Episode from "./Episode";
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


  const sliderData = [
    {
      id: 1,
      title: "Serene Nature Scene with Sunlight Streaming Through Trees",
      url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
    },
    {
      id: 2,
      title: "Tranquil Beach with Gentle Waves and Clear Blue Sky",
      url: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
    },
    {
      id: 3,
      title: "Lush Forest Scene with Rays of Sunlight Peeking Through",
      url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg",
    },
    {
      id: 4,
      title: "Elegant Woman in City Setting with a Chic Attitude",
      url: "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg",
    },
    {
      id: 5,
      title: "Majestic Tree in Vibrant Autumn Colors",
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
  ];


  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {/* {sliderData.map((item) => (
          <div className={styles.embla__slide} key={item.id}>
            <Image
              quality={100}
              src={item.url}
              alt="Carousel image"
              fill={true}
              className={styles.embla__slide__img}
            />
          </div>
        ))} */}

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