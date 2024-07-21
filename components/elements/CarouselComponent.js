import styles from '../../styles/Carousel.module.scss'
import React, { Component } from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

class CarouselComponent extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className={styles.customCarousel}>
        <Carousel autoplay effect="fade">
          <div>
            <Image
              quality={80}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/vagabond_2.png"}
              alt="Logo"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <Image
              quality={80}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/vagabond_2.png"}
              alt="Logo"
              fill={true}
              style={{ objectFit: "cover"}}
            />
          </div>
          <div>
            <Image
              quality={80}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/vagabond_2.png"}
              alt="Logo"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <Image
              quality={80}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/main/public/vagabond_2.png"}
              alt="Logo"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        </Carousel>
      </div>
    )
  }
}


export default CarouselComponent