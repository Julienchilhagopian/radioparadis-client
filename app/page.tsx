import Agenda from "./components/Agenda";
import Carousel from "./components/Carousel";
import Archive from "./components/Archive";
import { EmblaOptionsType } from 'embla-carousel'
import { fetchTracks } from './lib/actions/archives';
import History from "./components/History";

export default async function Home() {
  const tracks = await fetchTracks(30);
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

  return (
    <main>
      <Carousel tracks={tracks} options={OPTIONS}/>
      <History />
      <Agenda />
      <Archive tracks={tracks}/>
    </main>
  );
}