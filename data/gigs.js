/* ============================================================
   The Gig Log is built entirely from data/events.js — only
   events that have a photo folder are listed.

   Drumming is showcased in the Drum Cam section below.
   ============================================================ */

/* ============================================================
   HIGHLIGHT STRIP — the photo grid in the About section.
   ============================================================ */

const GALLERY = [
  { src: "assets/img/smcebu-console.webp", cap: "FOH position — SM Seaside Arena" },
  { src: "assets/events/julian-marley-01.webp", cap: "Monitors — Julian Marley & The Uprising" },
  { src: "assets/events/micheal-learns-to-rock-cebu-02.webp", cap: "Michael Learns to Rock, Cebu" },
  { src: "assets/events/jesus-reigns-pre-celeb-san-remegio-mon-mix-02.webp", cap: "Jesus Reigns Pre-Celebration" },
  { src: "assets/events/multishow-on-a-weekend-03.webp", cap: "Multi-show weekend" },
  { src: "assets/events/lacosutics-l2-certification-02.webp", cap: "L-Acoustics L2" }
];

/* ============================================================
   DRUM CAM VIDEOS — the video grid.
   Just the YouTube ID and a title. Thumbnails load automatically.
   ============================================================ */

const VIDEOS = [
  { id: "mbtXM5mrLz8", title: "Endless Praise", artist: "Planetshakers", tag: "Drum Cam" },
  { id: "H7e1fdSmZgM", title: "Washed",         artist: "Elevation RHYTHM", tag: "LIVE LOUDER 2026" },
  { id: "KR3JnYIieDM", title: "Worthy Of It All", artist: "David Brymer", tag: "DEEPER 2025" },
  { id: "Y-cZzBmEcqU", title: "The Church",     artist: "Bethel Music & UPPERROOM", tag: "DEEPER 2025" },
  { id: "J__vpNMqK7o", title: "Praise You Anywhere", artist: "Brandon Lake", tag: "LIVE LOUDER 2026" },
  { id: "uVrVu9Rl8Yc", title: "King of Majesty", artist: "Hillsong", tag: "Drum Cam" },
  { id: "uU9DNPU0aQc", title: "Open the Eyes of My Heart", artist: "Paul Baloche", tag: "Drum Cam" },
  { id: "ApwC6bdG2So", title: "Battle Belongs", artist: "Phil Wickham", tag: "Drum Cam" },
  { id: "Rc3YQYO_ZLQ", title: "Dios Ikaw Lang", artist: "Influence Worship", tag: "Drum Cam" }
];

/* ============================================================
   MARQUEE — the scrolling strip of names near the top.
   ============================================================ */

const CLIENTS = [
  "Julian Marley & The Uprising",
  "Michael Learns to Rock",
  "Secondhand Serenade",
  "South Border",
  "Martin Nievera",
  "Pops Fernandez",
  "Gigi De Lana",
  "Mayonnaise",
  "Unilever",
  "Globe Telecom",
  "Cebu Pacific",
  "Pilmico",
  "SM Seaside Arena",
  "NUSTAR Resort",
  "ASEAN Summit 2026",
  "Island Voices",
  "LIVE LOUDER",
  "DEEPER",
  "Intune Worship"
];
