/* ============================================================
   GIG DATA — the only file you need to edit to add shows.
   ------------------------------------------------------------
   Pulled from @___skati_ on Threads (Mar–Jul 2026).
   Threads only serves 15 posts to logged-out visitors, so
   anything older than 12 Mar 2026 still needs adding by hand.

   role   → free text, shown as the badge. E.g.
            "Front of House"  "Monitors"  "FOH + Monitors"
            "System Tech"  "Playback"  "Drums"  "Visuals"
   type   → "audio", "drums" or "visuals" (drives the filters)
   note   → optional line of detail under the venue
   (photos live in the GALLERY list further down, not here)
   ============================================================ */

const GIGS = [
  {
    artist: "SM Cebu Arena — Opening Day",
    venue: "SM Cebu Arena",
    city: "Cebu, Philippines",
    date: "2026-07-10",
    role: "FOH · Patch",
    type: "audio",
    console: "",
    photo: "",
    note: "FOH for the Foyer event; patch and FOH assist in the Arena Bowl"
  },
  {
    artist: "Julian Marley & The Uprising",
    venue: "",
    city: "Philippines",
    date: "2026-06-01",
    role: "Monitors",
    type: "audio",
    console: "Yamaha DM7 (full size)",
    photo: "",
    note: "With The Wicked Tarsier and Tropical Depression"
  },
  {
    artist: "ASEAN Summit 2026",
    venue: "",
    city: "Philippines",
    date: "2026-05-20",
    role: "Playback",
    type: "audio",
    console: "",
    photo: "",
    note: "Week-long service with Solid Video Corporation"
  },
  {
    artist: "SONATA — Day 1",
    venue: "Ayala Center Cebu",
    city: "Cebu, Philippines",
    date: "2026-05-17",
    role: "Monitors",
    type: "audio",
    console: "",
    photo: "",
    note: "Monitor world for ~15 bands — South Border headlining, with Ferdinand Aragon, Joseph Gara, Sepia Times and Phylum"
  },
  {
    artist: "Sukda — Duhaa",
    venue: "",
    city: "Philippines",
    date: "2026-04-09",
    role: "Live Audio",
    type: "audio",
    console: "",
    photo: "",
    note: ""
  },
  {
    artist: "Cebu Pacific Awards",
    venue: "",
    city: "Cebu, Philippines",
    date: "2026-03-12",
    role: "Visuals",
    type: "visuals",
    console: "Resolume",
    photo: "",
    note: "With 1FD Productions"
  }

  ,
  /* ---- DRUMS (from youtube.com/@ScOttArreglo) ----
     Dates are month-accurate, worked back from upload dates.
     Add the exact day if you know it. */
  {
    artist: "LIVE LOUDER 2026",
    venue: "",
    city: "Philippines",
    date: "2026-07",
    role: "Drums",
    type: "drums",
    console: "",
    photo: "",
    note: "Worship sets with Intune Worship — Elevation RHYTHM, Planetshakers, Brandon Lake, James River Worship"
  },
  {
    artist: "DEEPER 2025",
    venue: "",
    city: "Philippines",
    date: "2025-11",
    role: "Drums",
    type: "drums",
    console: "",
    photo: "",
    note: "Full conference set — songs from Bethel Music & UPPERROOM, Hillsong United, David Brymer, The Belonging Co."
  },
  {
    artist: "LIVE LOUDER",
    venue: "",
    city: "Philippines",
    date: "2025-07",
    role: "Drums",
    type: "drums",
    console: "",
    photo: "",
    note: "Songs from Bethel Music, Hillsong UNITED, Elevation Worship, Phil Wickham"
  }
];

/* ============================================================
   GALLERY — the photo grid in the About section.
   Drop a file in assets/img/ and add a line here.
   ============================================================ */

const GALLERY = [
  { img: "assets/img/smcebu-console",   cap: "FOH position — SM Cebu Arena" },
  { img: "assets/img/pa-line-array",    cap: "Line array, ground stack" },
  { img: "assets/img/venue-red-bowl",   cap: "Arena build, house lights up" },
  { img: "assets/img/smcebu-amps",      cap: "L-Acoustics LA7.16 amp racks" },
  { img: "assets/img/console-foh",      cap: "Console at FOH" },
  { img: "assets/img/pa-wall-blue",     cap: "PA wall" },
  { img: "assets/img/smcebu-bowl",      cap: "Arena bowl, pre-show" },
  { img: "assets/img/smcebu-center",    cap: "Centre line check" },
  { img: "assets/img/smcebu-fireworks", cap: "Opening Day" }
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
  "South Border",
  "Tropical Depression",
  "The Wicked Tarsier",
  "Joseph Gara",
  "Ferdinand Aragon",
  "Phylum",
  "Sepia Times",
  "SM Cebu Arena",
  "ASEAN Summit 2026",
  "Cebu Pacific",
  "LIVE LOUDER",
  "DEEPER",
  "Intune Worship"
];
