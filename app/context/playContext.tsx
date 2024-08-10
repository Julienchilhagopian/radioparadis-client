import { createContext, useContext, useState, SetStateAction, Dispatch } from "react";


interface IPlayContext {
  playing: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
}

const PlayContext = createContext<IPlayContext>({
  playing: false,
  setPlaying: () => {},
});

function PlayProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [playing, setPlaying] = useState(false);

  return (
    <PlayContext.Provider value={{playing, setPlaying}}>{children}</PlayContext.Provider>
  );
}

export {PlayContext, PlayProvider};