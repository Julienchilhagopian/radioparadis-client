import Agenda from "./components/Agenda";
import Carousel from "./components/Carousel";
import Archive from "./components/Archive";
import { fetchTracks } from './lib/actions/archives';

export default async function Home() {
  const tracks = await fetchTracks(10);

  console.log(tracks)

  return (
    <main>
      <Carousel tracks={tracks}/>
      <Agenda />
      <Archive tracks={tracks}/>
    </main>
  );
}