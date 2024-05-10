import React, {useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






export default function Nav({setIsLibraryOpen}) {
  


  return (
    <nav>
      <h1 >Waves</h1>
      <button onClick={() => setIsLibraryOpen(prev => !prev)}>
        Library
        <FontAwesomeIcon
          icon="fa-music"
        />
      </button>
    </nav>
  );
}
