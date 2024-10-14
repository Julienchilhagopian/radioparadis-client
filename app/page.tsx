import Agenda from "./components/Agenda";
import Carousel from "./components/Carousel";
import Archive from "./components/Archive";
import { fetchTracks } from './lib/actions/archives';
import History from "./components/History";

export default async function Home() {
  const tracks = await fetchTracks(10);

  return (
    <main>
      <Carousel tracks={tracks}/>
      <History />
      <Agenda />
      <Archive tracks={tracks}/>
    </main>
  );
}