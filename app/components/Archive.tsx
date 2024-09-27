
import Episode from "../components/Episode";


export default async function Archive(props: any) {

  return (
    <div>
        <h1>Archives</h1>
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