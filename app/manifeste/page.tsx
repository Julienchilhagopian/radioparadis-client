import styles from '../styles/manifeste.module.scss';
import PhotosCarousel from '../components/PhotosCarousel';
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "Manifeste - Radio Paradis",
  description: "Radio Paradis est une webradio musicale de quartier née en 2022 dans la rue de Paradis au cœur du 10eme arrondissement.",
};

export default async function Manifeste() {

  const carouselData = [
    {
      id: 1,
      title: "Manifeste 1",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/manifeste/manifeste_carousel_1.png",
    },
    {
      id: 2,
      title: "Manifeste 2",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/manifeste/manifeste_carousel_2.jpg",
    },
    {
      id: 3,
      title: "Manifeste 3",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/manifeste/manifeste_carousel_3.jpg",
    },
    {
      id: 4,
      title: "Manifeste 4",
      url: "https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/manifeste/manifeste_carousel_4.jpg",
    }
  ];

  return (
    <div className={styles.manifesteContainer}>

      <div className={styles.manifestCarouselContainer}>
        <PhotosCarousel data={carouselData} />
      </div>

      <div className={styles.manifestTextContainer}>
        <div className={styles.articleContainer}>
          <h1>Manifeste</h1>
          <p>Radio Paradis est une webradio musicale de quartier née en 2022 dans la rue de Paradis au cœur du 10ᵉ arrondissement.
            Nous souhaitons construire une plateforme d'expression pour la scène musicale émergente et les acteurs locaux du quartier.
          </p>
          <p>L'équipe : &nbsp;
            <Link href='https://www.instagram.com/chadelirium/' target="_blank">
              Charlotte Guichard
            </Link>, &nbsp;
            <Link href='https://www.instagram.com/victor_tomasi_bro/' target="_blank">
              Victor Tomasi
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
            <Link href='https://www.instagram.com/m4non_/' target="_blank">
              Manon Rouquette
            </Link>, &nbsp;
            <Link href='https://www.instagram.com/funky_gigi1997/' target="_blank">
              Jérémy Berloty
            </Link>&nbsp;et&nbsp;
            <Link href='https://www.instagram.com/julien.chilou/' target="_blank">
              Julien Chil Hagopian
            </Link>.
          </p>
        </div>

        <div className={styles.articleContainer}>
          <h1>Studio DJ</h1>
          <div className={styles.article}>
            <div className={styles.articleImageContainer}>
              <Image
                quality={50}
                src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/manifeste/studio_dj.jpg"}
                alt="Partner logo"
                fill={true}
                className={styles.articleImage}
              />
            </div>
            <div>
              <p>Les émissions musicales des résident.e.s de la radio sont enregistrées dans l'appartement de Jérém et Louis dans le 18ème arrondissement (juste à côté du 10ème). Le set up suivant y est installé :</p>
              <h4> Partie DJ </h4>
              <ul>
                <li>2 x technics - sl12000 m3d</li>
                <li>2 x cdj 2000 (non - nexus)</li>
                <li>1 x xone 23</li>
              </ul>
              <br />
              <h4>Partie enregistrement</h4>
              <ul>
                <li>Yamaha 02R v2</li>
                <li>Behringer UMC1820</li>
                <li>2 micros</li>
                <li>Zoom P8</li>
              </ul>
              <br />
              <p>
                Attention l'ascenseur n'accepte pas plus de 4 personnes.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.articleContainer}>
          <h1>Studio dans le quartier</h1>
          <div className={styles.article}>
            <div className={styles.articleImageContainer}>
              <Image
                quality={50}
                src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/manifeste/crl10_studio.png"}
                alt="Partner logo"
                fill={true}
                className={styles.articleImage}
              />
            </div>
            <div>
              <p>Les émissions tenues par les acteurs du 10ᵉ arrondissement sont enregistrées depuis le studio du centre Paris Anim' La Grange aux Belles.
                Nous remercions l'association CRL10 de nous permettre d'utiliser cet espace.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.articleContainer}>
          <h1>Les supporters</h1>
          <p>Un gros merci aux amis de la radio qui soutiennent ce projet depuis toujours 🖤</p>
          <p>L'infrastructure de la radio est composée de deux parties : le site web écrit en Next.js et le serveur de la radio basé sur le projet open source <Link href='https://www.azuracast.com/' target="_blank">
            AzuraCast
          </Link>.
            <br></br>
            Pour héberger toute cette histoire, nous bénéficions du programme "Nonprofit" du cloud Digital Ocean.
          </p>
        </div>


        <div className={styles.manifestLogos}>
          <div className={styles.manifestLogosImageContainer}>
            <Image
              quality={50}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/manifeste/partners_logo/azuracast_logo.png"}
              alt="Partner logo"
              fill={true}
              className={styles.manifestLogosImage}
            />
          </div>
          <div className={styles.manifestLogosImageContainer}>
            <Image
              quality={50}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/manifeste/partners_logo/crl_10_logo.png"}
              alt="Partner logo"
              fill={true}
              className={styles.manifestLogosImage}
            />
          </div>
          <div className={styles.manifestLogosImageContainer}>
            <Image
              quality={50}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/manifeste/partners_logo/digital_ocean_logo.png"}
              alt="Partner logo"
              fill={true}
              className={styles.manifestLogosImage}
            />
          </div>
          <div className={styles.manifestLogosImageContainer}>
            <Image
              quality={50}
              src={"https://raw.githubusercontent.com/Julienchilhagopian/radioparadis-client/refs/heads/main/public/manifeste/partners_logo/vercel_logo.png"}
              alt="Partner logo"
              fill={true}
              className={styles.manifestLogosImage}
            />
          </div>
        </div>
      </div>
    </div >
  );
}
