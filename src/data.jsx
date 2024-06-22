import { v4 as uuidv4 } from "uuid";
import remainder from "./images/remainder.jpg";
import beaver from "./images/beaver.jpg";
import daylight from "./images/daylight.jpg";
import keep from "./images/keep.jpg";
import bikini from "./images/bikini.jpg";
import departure from "./images/departure.jpg";
function chillHop() {
  return [
    {
      name: "A Reminder",
      artist: "Sleepy Fish, coa",
      cover: remainder,
      id: uuidv4(),
      active: true,
      audio: "https://stream.chillhop.com/mp3/36925",
      color: ["#E56D16", "#EDDEB7"],
    },

    {
      name: "Beaver Creek",
      cover: beaver,
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daylight",
      cover: daylight,
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover: keep,
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bikini Palm-trees",
      cover: bikini,
      artist: "C Y G N",
      audio: "https://stream.chillhop.com/mp3/60572",
      color: ["#122422", "#C92F25"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Departure",
      cover: departure,
      artist: "Makzo",
      audio: "https://stream.chillhop.com/mp3/11771",
      color: ["#284F8E", "#FEDF68"],
      id: uuidv4(),
      active: false,
    },

    //ADD MORE HERE
  ];
}

export default chillHop;
