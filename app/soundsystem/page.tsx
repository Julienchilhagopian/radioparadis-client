import PhotosCarousel from '../components/PhotosCarousel';
import styles from '../styles/soundsystem.module.scss';
import Image from 'next/image';
import Link from 'next/link';


export default async function Soundsystem() {

  const carouselData = [
    {
      id: 1,
      title: "Serene Nature Scene with Sunlight Streaming Through Trees",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/soundsystem/soundsystem_carousel_1.png",
    },
    {
      id: 2,
      title: "Tranquil Beach with Gentle Waves and Clear Blue Sky",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/soundsystem/soundsystem_carousel_2.png",
    },
    {
      id: 3,
      title: "Lush Forest Scene with Rays of Sunlight Peeking Through",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/soundsystem/soundsystem_carousel_3.png",
    },
    {
      id: 4,
      title: "Elegant Woman in City Setting with a Chic Attitude",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/soundsystem/soundsystem_carousel_4.png",
    }
  ];


  return (
    <div className={styles.soundsystemContainer}>

      <div className={styles.carouselContainer}>
        <PhotosCarousel data={carouselData} />
      </div>



      <div className={styles.soundsystemTextContainer}>
        <h1>Soundsystem</h1>

        <div className={styles.soundsystemTextArticle}>
          <h3>LE PROJET :</h3>
          <p> Radio Paradis Soundsystem est le système de sonorisation destiné pour des événements en public. Il a été dessiné et se construit actuellement (mars 2025) au sein du Chamodix, la ressourcerie du 10ème arrondissement de Paris.</p>
          <br />
          <p className={styles.soundsystemContact}>  Vous faites un événement dans le 10ème arrondissement, vous êtes un acteur du quartier qui a besoin de sonorisation ? Envoyez un message sur <Link href="mailto:team@radioparadis.live">team@radioparadis.live</Link> ! </p>
          <br />
          <p>Notre système peut sonoriser des groupes de musique pour une audience jusqu’à 500 personnes. Nous acceptons les projets hors 10ème arrondissement, mais priorisons ceux liés à notre quartier.  Ce projet émane d’une volonté de rapprocher les branches quartier et musique de la radio à travers la diffusion de musique. Nous souhaitons aider à l’organisation d’événements créant du lien social, en sortant la radio dans le quartier. Pour cela nous proposons des prestations techniques avec notre système de diffusion construit par nos soins. </p>
          <br />
          <p>A travers ce système, nous voulons nous inclure plus directement dans la vie du quartier, et à l’avenir organiser une fête et événements en incluant les acteurs gravitant autour du projet, les résidents de la branche quartier, et les habitants.</p>
        </div>

        <div className={styles.soundsystemTextArticle}>
          <h3>LE SYSTÈME (MARS 2025) : </h3>
          <p> Un soundsysteme est un ensemble d’enceinte de sonorisation visant à diffuser de la musique à une audience importante. Notre soundsysteme a été dessiné par <Link href='https://www.instagram.com/louisreine/' target="_blank">
            Louis Reine
          </Link> avec comme cahier des charges de pouvoir sonoriser jusqu’à 500 personnes dans une utilisation type concert sans détriment sur la qualité sonore. Il est composé de 4 enceintes de graves, 2 enceintes bas-médiums, et 2 enceintes médium aiguës.
            Les simulations ont été réalisées à l’aide du logiciel Hornresp, les mesures avec le logiciel Open Sound Meter. La construction du système est réalisée dans l’atelier bois et réparation du Chamodix. Ils nous fournissent gracieusement du bois de récupération pour l’élaboration de certaines enceintes, notamment des enceintes bas-médium.</p>
          <br />
          <p> 1. Les enceintes de grave </p>
          <p>Les enceintes de grave (subwoofers) ont été conçues pour être relativement compacte tout en ne sacrifiant pas la qualité sonore et le niveau qu’elles peuvent fournir. Elles sont équipés avec le haut parleur RCF LF18N405 et utilisent le principe du bass reflex</p>
          <div className={styles.soundsystemImageContainer}>
            <Image
              quality={50}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/soundsystem/ze_bass_1.png"}
              alt="Partner logo"
              fill={true}
              
            />
            </div>
          <div className={styles.soundsystemImageContainer}>
            <Image
              quality={50}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/soundsystem/ze_bass_2.png"}
              alt="Partner logo"
              fill={true}
              
            />
            </div>
          <br />
          <p> 2. Les enceintes bas-médium.</p>
          <p> Les enceintes bas-médium ont été conçues à partir du design du paraflex C2D, adapté grâce au simulation proposée par  <Link href='https://freeloudspeakerplan.rf.gd/?i=1' target="_blank">
            Free Loud Speaker
          </Link>   et adaptée pour le haut parleur LAVOCE WAF 123.00 à l’aide du logiciel <Link href='https://www.freecad.org/' target="_blank">FreeCAD  </Link>.</p>

          <br />

          <div className={styles.soundsystemImageContainer}>
            <Image
              quality={50}
              src={"https://github.com/Julienchilhagopian/radioparadis-client/blob/d5d7cd092d76004730c2ff51bc80f90f336966e5/public/soundsystem/Kick12%201%2015mm-1.png"}
              alt="Partner logo"
              fill={true}
              
            />
            </div>
          <div className={styles.soundsystemImageContainer}>
            <Image
              quality={50}
              src={"https://github.com/Julienchilhagopian/radioparadis-client/blob/d5d7cd092d76004730c2ff51bc80f90f336966e5/public/soundsystem/Kick12%202%2015mm-1.png"}
              alt="Partner logo"
              fill={true}
              
            />
            </div>
          
          <p> 3. Les enceintes d’aigüe</p>
          <p>Les enceintes d’aigüe sont toujours en cours d’élaboration. En attendant, nous utilisons des Nexo PS15.</p>

          <br />
          <p> 4. Le traitement du signal et l’amplification</p>
          <p>Le Radio Paradis Soundsystem est alimenté en 4 voie, sub kick, med, high. Nous possédons actuellement 1 ampli hexa audio 4x1300W qui gère l’amplification des caissons de basse, des bas-médiums et des woofer des PS15, et un amplificateur 2x200W pour les tweeter des PS15. Nous allons acquérir un dernier amplificateur de 2x2600W.</p>
        </div>
      </div>


    </div>
  );
}
