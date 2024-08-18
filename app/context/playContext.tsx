import { createContext, useContext, useState, SetStateAction, Dispatch } from "react";


interface IPlayContext {
  playing: boolean;
  playingReplay: boolean;
  replayUrl: string;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  setPlayingReplay: Dispatch<SetStateAction<boolean>>;
  setReplayUrl: Dispatch<SetStateAction<string>>;
}

const PlayContext = createContext<IPlayContext>({
  playing: false,
  playingReplay: false,
  replayUrl: ",",
  setPlaying: () => {},
  setPlayingReplay: () => {},
  setReplayUrl: () => {}
});

function PlayProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [playing, setPlaying] = useState(false);
  const [playingReplay, setPlayingReplay] = useState(false);
  const [replayUrl, setReplayUrl] = useState("");

  return (
    <PlayContext.Provider value={{playing, setPlaying, playingReplay, setPlayingReplay, replayUrl, setReplayUrl}}>{children}</PlayContext.Provider>
  );
}

export {PlayContext, PlayProvider};