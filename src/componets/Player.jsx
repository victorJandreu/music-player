import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Player({
  musicData,
  setMusicData,
  actualSong,
  setActualSong,
}) {
  const [playing, setPlaying] = useState(false);
  const [audioData, setAudioData] = useState({
    currentTime: 0,
    duration: 0,
  });

  const audioRef = useRef(null);

  const playYa = () => {
    !playing ? audioRef.current.play() : audioRef.current.pause();
    setPlaying((prev) => !prev);
  };

  const audioInfo = () => {
    setAudioData({
      currentTime: audioRef.current.currentTime,
      duration: audioRef.current.duration,
    });
  };

  const incrementar = () => {
    setMusicData((prev) => {
      let array = [];
      const todoFalse = prev.map((x) => {
        return {
          ...x,
          active: false,
        };
      });
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].id === actualSong[0].id) {
          array = todoFalse.map((x, index) => {
            if (index === 0 && i + 1 === prev.length) {
              return {
                ...x,
                active: true,
              };
            } else if (index === i + 1) {
              return {
                ...x,
                active: true,
              };
            } else {
              return x;
            }
          });
        }
      }
      return array;
    });
  };

  const decrementar = () => {
    setMusicData((prev) => {
      let array = [];
      const todoFalse = prev.map((x) => {
        return {
          ...x,
          active: false,
        };
      });
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].id === actualSong[0].id) {
          array = todoFalse.map((x, index) => {
            if (i === 0 && index === prev.length - 1) {
              return {
                ...x,
                active: true,
              };
            } else if (index === i - 1) {
              return {
                ...x,
                active: true,
              };
            } else {
              return x;
            }
          });
        }
      }
      return array;
    });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const cambioValue = (e) => {

    audioRef.current.currentTime = e.target.value
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(audioData.currentTime)}</p>
        <input type="range" min={0} max={audioData.duration} onChange={(e) => cambioValue(e)}  />
        <p>{getTime(audioData.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          icon="fa-angle-left"
          size="2x"
          className="skip-back"
          onClick={decrementar}
        />

        <FontAwesomeIcon
          icon={!playing ? "fa-play" : "fa-circle-pause"}
          size="3x"
          className="play"
          onClick={playYa}
        />

        <FontAwesomeIcon
          icon="fa-angle-right"
          size="2x"
          className="skip-forward"
          onClick={incrementar}
        />
      </div>
      <audio
        src={actualSong[0].audio}
        ref={audioRef}
        onTimeUpdate={audioInfo}
        onLoadedData={audioInfo}
      />
    </div>
  );
}
