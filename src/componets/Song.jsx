import React from "react";

export default function Song({cover, name, artist}) {

  

  return (
    <>
      <div className="song-container">
        <img src={cover} alt=""  />
        <h2>{name}</h2>
        <h3>{artist}</h3>
      </div>

    </>
  );
}

/*
imagen del albun
h2 nombre de la cancion
h3 nombre del artista
*/