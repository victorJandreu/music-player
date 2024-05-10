import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Player({
  setCurrentSong,
  song,
  currentSong,
  isPlaying,
  setIsPlaying,
  setSong,
  audioRef,
  currentTime,
  handleTime,
  setCurrentTime,
}) {
  const playSongHandle = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  //pasar a la siguiente cancion
  const incrementar = async () => {
    await setSong((prev) => {
      const todoFalse = prev.map((x) => {
        return {
          ...x,
          active: false,
        };
      });

      const currentIndex = todoFalse.findIndex((x) => x.id === currentSong.id);
      return todoFalse.map((cancion, index) => {
        if ((currentIndex + 1) % todoFalse.length === 0 && index === 0) {
          return {
            ...cancion,
            active: true,
          };
        } else if (currentIndex + 1 === index) {
          return {
            ...cancion,
            active: true,
          };
        } else {
          return { ...cancion };
        }
      });
    });
  };

  //pasar a la cancion anterior
  const decrementar = () => {
    setSong((prev) => {
      const todoFalse = prev.map((x) => {
        return {
          ...x,
          active: false,
        };
      });

      const currentIndex = todoFalse.findIndex((x) => x.id === currentSong.id);

      return todoFalse.map((cancion, index) => {
        if (
          (currentIndex - 1) % todoFalse.length === -1 &&
          index === todoFalse.length - 1
        ) {
          return {
            ...cancion,
            active: true,
          };
        } else if (currentIndex - 1 === index) {
          return {
            ...cancion,
            active: true,
          };
        } else {
          return cancion;
        }
      });
    });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  // modificar el momento de la cancion al mover el input radio
  const dragHandler = (e) => {
    setCurrentTime((prev) => {
      audioRef.current.currentTime = e.target.value;
      return {
        ...prev,
        currentTime: e.target.value,
      };
    });
  };


/* style */

const trackAnime = {
  transform: `translateX(${currentTime.animationPercentaje}%)`,
}

const endHandle = async () => {
  incrementar()
  };

 


  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(currentTime.currentTime)}</p>
        <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
          <input
            type="range"
            min={0}
            max={currentTime.duration ? currentTime.duration : 0}
            value={currentTime.currentTime ? currentTime.currentTime : 0}
            onChange={dragHandler}
          />
          <div style={trackAnime} className="animate-track"></div>
        </div>
        <p>{currentTime.duration ? getTime(currentTime.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          icon="fa-angle-left"
          size="2x"
          className="skip-back"
          onClick={decrementar}
        />

        <FontAwesomeIcon
          icon={!isPlaying ? "fa-play" : "fa-circle-pause"}
          size="3x"
          className="play"
          onClick={playSongHandle}
        />

        <FontAwesomeIcon
          icon="fa-angle-right"
          size="2x"
          className="skip-forward"
          onClick={incrementar}
        />
      </div>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={(e) => handleTime(e)}
        onLoadedMetadata={handleTime}
        onEnded={endHandle}
      />
    </div>
  );
}
