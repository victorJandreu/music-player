import React from "react";
import LibrarySong from "./LibrarySong";

export default function Library({ song, setSong, audioRef, isPlaying, isLibraryOpen }) {
  
  const songsArray = song.map((x) => {

    return <LibrarySong song={x} key={x.id} setSong={setSong} ide={x.id} audioRef={audioRef} isPlaying={isPlaying} />;
  });

  return (
    <div className={`library ${isLibraryOpen ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">{songsArray}</div>
    </div>
  );
}
