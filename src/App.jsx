import React, { useState, useEffect, useRef } from "react";
import "./style/app.scss";
import Song from "./componets/Song";
import Player from "./componets/Player";
import data from "./data";
import Library from "./componets/Library";
import Nav from "./componets/Nav";

function App() {
  const [song, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(
    song.filter((x) => x.active === true)
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentaje: 0,
  });

  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  useEffect(() => {
    //actualizar la cancion actual
    setCurrentSong(song.filter((x) => x.active === true));
    // para que cuando cambies de cancion empiece la nueva cancion si se le ha dado al play antes

    if (isPlaying) {
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then((audio) => {
            audioRef.current.play();
          })
          .catch((error) => {
            console.log(error);
            audioRef.current.play();
          });
      }
    }
  }, [song]);

  //actualizar el tiempo y la duracion del audio para poder escucharlo
  const handleTime = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setCurrentTime((prev) => {
      return {
        ...prev,
        currentTime,
        duration,
        animationPercentaje: animation,
      };
    });
  };

  return (
    <div className={`App ${isLibraryOpen ? "library-active" : ""}`}>
      <Nav setIsLibraryOpen={setIsLibraryOpen} />
      <Song currentSong={currentSong[0]} isPlaying={isPlaying} />
      <Library
        song={song}
        setSong={setSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        isLibraryOpen={isLibraryOpen}
      />
      <Player
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        song={song}
        currentSong={currentSong[0]}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSong={setSong}
        currentTime={currentTime}
        handleTime={handleTime}
        setCurrentTime={setCurrentTime}
      />
    </div>
  );
}

export default App;
