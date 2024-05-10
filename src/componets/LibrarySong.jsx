import React from "react";

export default function LibrarySong({
  song,
  setSong,
  ide,
  audioRef,
  isPlaying,
}) {

  // actualizar la cancion al seleccionarse la lista desplegable
  function selecte() {
    setSong((prev) => {
      const todoFalse = prev.map((x) => {
        return {
          ...x,
          active: false,
        };
      });

      return todoFalse.map((son) => {
        if (son.id === ide) {
          return {
            ...son,
            active: true,
          };
        } else {
          return son;
        }
      });
    });
  }

  return (
    <div className={`library-song ${song.active ? "selected" : ""}`} onClick={selecte}>
      <img src={song.cover} alt="" />
      <div className="songs-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
