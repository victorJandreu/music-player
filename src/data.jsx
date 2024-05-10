import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "A Reminder",
      artist: "Sleepy Fish, coa",
      cover: "https://chillhop.com/wp-content/uploads/2023/01/4a42f136486d42e4d021c673540885c82a1934e6-1024x1024.jpg",
      id: uuidv4(),
      active:true,
      audio: "https://stream.chillhop.com/mp3/36925",
      color: ["#E56D16", "#EDDEB7"]
    },

    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bikini Palm-trees",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/06/9180a7fabdc07fe2e221bb26bdd477cb66f6b69e-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://stream.chillhop.com/mp3/60572",
      color: ["#122422", "#C92F25"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Departure",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/09/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
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