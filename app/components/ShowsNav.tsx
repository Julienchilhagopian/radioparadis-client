
import Episode from "../components/Episode";
import { Button } from "@nextui-org/react";
import { useRef, useEffect} from 'react';
import styles from '../styles/showsNav.module.scss'



export default function ShowsNav(props: any) {
  let buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    // Gestionnaire d'événements global pour capter les clics
    const handleClickOutside = (event: MouseEvent) => {
   
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        // Si on clique en dehors du bouton
        props.setFocusShow({ id: 'all' }); // Défiltre les shows et affiche tous
      }
    };

    // Ajouter l'écouteur d'événement
    document.addEventListener('mousedown', handleClickOutside);

    // Nettoyer l'écouteur lors du démontage du composant
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.buttonWrap}>
        <Button className={styles.showButton} onClick={(event) => {
          props.setFocusShow({ id: 'all' })

          if (buttonRef.current) {
            buttonRef.current.blur();
          }
          buttonRef.current = event.target as HTMLButtonElement
          buttonRef.current.focus();
        }
      } color="primary" variant="bordered">
          Tous
        </Button>
      </div>

      {props.shows.length > 0 ? (
        props.shows.map((playlist: any) => (
          <div className={styles.buttonWrap} key={playlist.id}>
            <Button className={styles.showButton} onClick={(event) => {
              props.setFocusShow(playlist)
          
              if (buttonRef.current) {
                buttonRef.current.blur();
              }
              buttonRef.current = event.target as HTMLButtonElement
              buttonRef.current.focus();
            }
            } color="primary"
              variant="bordered">
              {playlist.title}
            </Button>
          </div>
        ))
      ) : (
        <div>Aucune playlist trouvée</div>
      )}

    </div>
  )
}