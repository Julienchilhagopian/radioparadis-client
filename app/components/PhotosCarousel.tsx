'use client'
import React from "react";
import Fade from 'embla-carousel-fade'
import useEmblaCarousel from 'embla-carousel-react'
import styles from '../styles/carousel.module.scss';
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';



function PhotosCarousel(props: any) {

  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Fade(),
    Autoplay()
  ])


  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {props.data.map((item: any) => (
          <div className={styles.embla__slide} key={item.id}>
            <Image
              quality={100}
              src={item.url}
              alt="Carousel image"
              fill={true}
              className={styles.embla__slide__img}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotosCarousel
