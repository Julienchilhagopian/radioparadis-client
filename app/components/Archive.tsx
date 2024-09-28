
import Episode from "../components/Episode";


export default async function Archive(props: any) {

  return (
    <div>
        {
        props.tracks.length > 0 ? (
          props.tracks.map((episode:any) => (
            <Episode key={episode.id} episode={episode} />
          ))
        )
        :
        <div></div>
        }
    </div>
  )
}