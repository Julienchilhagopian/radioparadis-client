import styles from '../styles/manifeste.module.scss';
import PhotosCarousel from '../components/PhotosCarousel';


export default async function Manifeste() {

  const carouselData = [
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
    <div className={styles.manifesteContainer}>
    
      <div className={styles.manifestCarouselContainer}>
        <PhotosCarousel data={carouselData}/>
      </div>

      <div className={styles.manifestTextContainer}>
        <h1>Manifeste</h1>
        <p>Radio Paradis est une web radio musicale de quartier née en 2022 dans la rue de Paradis au coeur du 10ème arrondissement. 
          Nous souhaitons construire une plateforme d'expression pour la scène émergente musicale et les acteurs locaux du quartier.
        </p>

        <h1>Studio DJ</h1>
        <p>Le s</p>

        <h1>Studio dans le quartier</h1>

      </div>

    </div>
  );
}
