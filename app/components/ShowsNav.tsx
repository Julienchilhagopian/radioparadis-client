import { Button } from "@nextui-org/react";
import { useRef, useEffect} from 'react';
import styles from '../styles/showsNav.module.scss'



export default function ShowsNav(props: any) {
  let buttonRef = useRef<HTMLButtonElement | null>(null)

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