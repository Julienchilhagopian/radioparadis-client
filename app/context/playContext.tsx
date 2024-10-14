import { createContext, useContext, useState, SetStateAction, Dispatch } from "react";

export type Track = {
  now_playing: {
    song: {
      artist: string;
      title: string;
      art: string;
      id: string;
    };
    elapsed: number; // Temps écoulé en secondes
    duration: number; // Durée totale en secondes
  };
  song_history: {
    played_at: number;
    song: {
      id: string;
      title: string;
      artist: string
    }
  }[];
}

interface IPlayContext {
  playing: boolean;
  playingReplay: boolean;
  replayUrl: string;
  currentTrack: Track | null;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  setPlayingReplay: Dispatch<SetStateAction<boolean>>;
  setReplayUrl: Dispatch<SetStateAction<string>>;
  setCurrentTrack: Dispatch<SetStateAction<Track | null>>;
}

const PlayContext = createContext<IPlayContext>({
  playing: false,
  playingReplay: false,
  replayUrl: "",
  currentTrack: null,
  setPlaying: () => {},
  setPlayingReplay: () => {},
  setReplayUrl: () => {},
  setCurrentTrack: () => {}
});

function PlayProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [playing, setPlaying] = useState(false);
  const [playingReplay, setPlayingReplay] = useState(true);
  const [replayUrl, setReplayUrl] = useState("");
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  return (
    <PlayContext.Provider value={{playing, setPlaying, playingReplay, setPlayingReplay, replayUrl, setReplayUrl, currentTrack, setCurrentTrack}}>{children}</PlayContext.Provider>
  );
}

export {PlayContext, PlayProvider};