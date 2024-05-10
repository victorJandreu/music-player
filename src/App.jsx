import React, { useState, useEffect } from "react";
import "./style/app.scss";
import Song from "./componets/Song";
import Player from "./componets/Player";
import data from "./data";

function App() {
  const [musicData, setMusicData] = useState(data());

  useEffect(() => {
    setActualSong(musicData.filter((x) => x.active === true));
  }, [musicData]);
  const [actualSong, setActualSong] = useState(
    musicData.filter((x) => x.active === true)
  );

  return (
    <>
      <Song
        cover={actualSong[0].cover}
        name={actualSong[0].name}
        artist={actualSong[0].artist}
      />

      <Player
        musicData={musicData}
        setMusicData={setMusicData}
        actualSong={actualSong}
        setActualSong={setActualSong}
      />
    </>
  );
}

export default App;
