import styles from '../styles/manifeste.module.scss';
import PhotosCarousel from '../components/PhotosCarousel';
import Link from 'next/link'
import Image from 'next/image';


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
        <PhotosCarousel data={carouselData} />
      </div>

      <div className={styles.manifestTextContainer}>

        <div className={styles.articleContainer}>
          <h1>Manifeste</h1>
          <p>Radio Paradis est une web radio musicale de quartier née en 2022 dans la rue de Paradis au coeur du 10ème arrondissement.
            Nous souhaitons construire une plateforme d'expression pour la scène émergente musicale et les acteurs locaux du quartier.
          </p>
          <p>L'équipe : &nbsp;
            <Link href='https://www.instagram.com/chadelirium/' target="_blank">
              Charlotte Guichard
            </Link>, &nbsp;
            <Link href='https://www.instagram.com/victor_tomasi_bro/' target="_blank">
              Victor Legrand
            </Link>, &nbsp;
            <Link href='https://www.instagram.com/colobrisso/' target="_blank">
              Colombe Brissonnet
            </Link>, &nbsp;
            <Link href='https://www.instagram.com/louisreine/' target="_blank">
              Louis Reine
            </Link>, &nbsp;
            <Link href='https://www.instagram.com/paul_diac/' target="_blank">
              Paul Diacquenod
            </Link>, &nbsp;
            <Link href='https://www.instagram.com/funky_gigi1997/' target="_blank">
              Jérémy Berloty
            </Link>, &nbsp;
            <Link href='https://www.instagram.com/julien.chilou/' target="_blank">
              Julien Chil Hagopian
            </Link>.
          </p>
        </div>

        <div className={styles.articleContainer}>
          <h1>Studio DJ</h1>
          <p>Les émissions musicales des résident.e.s de la radio sont enregistrées dans l'appartement de Jérém et Louis dans le 18ème arrondissement (juste à côté du 10ème).
            Le set up suivant est installé :

          </p>
          <p>Attention l'ascenseur n'accepte pas plus de 4 personnes.
          </p>
        </div>

        <div className={styles.articleContainer}>
          <h1>Studio dans le quartier</h1>
          <p>Les émissions tenues par les acteurs du 10ème arrondissement sont enregistrées depuis le studio du centre Paris Anim' de la Grange aux Belles.
            On remercie l'association CRL10 d'avoir accepté de nous prêter cet espace.
          </p>
        </div>

        <div className={styles.articleContainer}>
          <h1>Les supporters</h1>
          <p>On souhaite remercier chaleureusement les amis de la radio qui soutiennent ce projet depuis toujours.</p>
          <p>L'infrastructure de la radio est composée de deux parties : le site web écrit en Next.js et le server de la radio basé sur le projet open source <Link href='https://www.azuracast.com/' target="_blank">
            AzuraCast
          </Link>.
            <br></br>
            Pour héberger toute cette histoire, nous bénéficions du programme "Nonprofit" du cloud Digital Ocean.
          </p>
        </div>


        <div className={styles.manifestLogos}>
        
        </div>

      </div>

    </div>
  );
}
