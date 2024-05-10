import React from "react";

export default function Song({currentSong, isPlaying}) {


  return (
      <div className="song-container">
        <img className={isPlaying ? "rotateAnimation" : ""} src={currentSong.cover} alt=""  />
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </div>
  );
}
