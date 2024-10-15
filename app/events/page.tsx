import PhotosCarousel from '../components/PhotosCarousel';
import styles from '../styles/events.module.scss';
import Image from 'next/image';
import Link from 'next/link';


export default async function Events() {

  const carouselData = [
    {
      id: 1,
      title: "Serene Nature Scene with Sunlight Streaming Through Trees",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/events/event_carousel_1.jpg",
    },
    {
      id: 2,
      title: "Tranquil Beach with Gentle Waves and Clear Blue Sky",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/events/event_carousel_2.jpg",
    },
    {
      id: 3,
      title: "Lush Forest Scene with Rays of Sunlight Peeking Through",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/events/event_carousel_3.jpg",
    },
    {
      id: 4,
      title: "Elegant Woman in City Setting with a Chic Attitude",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/events/event_carousel_4.png",
    },
    {
      id: 5,
      title: "Majestic Tree in Vibrant Autumn Colors",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/events/event_carousel_5.jpg",
    },
  ];


  return (
    <div className={styles.eventsContainer}>

      <div className={styles.carouselContainer}>
        <PhotosCarousel data={carouselData} />
      </div>

      <div className={styles.eventsTextContainer}>
        <h1>évènements</h1>
        <p>
          Les évènements Radio Paradis sont une occasion pour se retrouver et déplacer physiquement le plateau radio.
          Rejoins-nous sur  <Link href='https://www.instagram.com/julien.chilou/' target="_blank">instagram</Link> pour être courant de tous les prochains évènements.
        </p>
      </div>


    </div>
  );
}
