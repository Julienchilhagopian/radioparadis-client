
import Episode from "../components/Episode";


export default function ShowsNav(props: any) {

  return (
    <div>
      <h1>Shows</h1>

      <div onClick={() => props.setFocusShow('all')}>
        <h2>All</h2>
      </div>

      { props.shows.length > 0 ? (
        props.shows.map((playlist: any) => (
          <div key={playlist.id} onClick={() => props.setFocusShow(playlist)}>
            <h2>{playlist.title}</h2>
          </div>
        ))
      ) : (
        <div>Aucune playlist trouvée</div>
      )}
      
    </div>
  )
}