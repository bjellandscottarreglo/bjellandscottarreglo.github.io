/* ============================================================
   EVENTS — every gig with photos. Photos live in
   assets/events/<slug>-NN.webp  (+ -t.webp thumbs)
   and are numbered 01..photos, so you only set the count.
   ============================================================ */

const EVENTS = [
  {
    slug: "sm-seaside-arena-inuguartion",
    date: "2026-07-10",
    title: "SM Seaside Arena — Inauguration",
    venue: "SM Seaside Arena", city: "Cebu, Philippines",
    role: "FOH · Monitor Assist", type: "audio",
    gear: "",
    note: "FOH for the Foyer setup, monitor assist for the Arena Bowl",
    photos: 7
  },
  {
    slug: "lacosutics-l2-certification",
    date: "2026-07-05",
    title: "L-Acoustics L2 — Soundvision & Rigging",
    venue: "", city: "",
    role: "Certification", type: "cert",
    gear: "",
    note: "Soundvision, rigging and system certification",
    photos: 6
  },
  {
    slug: "julian-marley",
    date: "2026-06-01",
    title: "Julian Marley & The Uprising",
    venue: "", city: "Philippines",
    role: "Monitors", type: "audio",
    gear: "Yamaha DM7 full size",
    note: "With The Wicked Tarsier and Tropical Depression",
    photos: 7
  },
  {
    slug: "asean-summit-2026",
    date: "2026-05-20",
    title: "ASEAN Summit 2026",
    venue: "", city: "Philippines",
    role: "Playback", type: "audio",
    gear: "",
    note: "Week-long service with Solid Video Corporation",
    photos: 8
  },
  {
    slug: "sonata-monitor-mix",
    date: "2026-05-18",
    title: "SONATA",
    venue: "Ayala Center Cebu", city: "Cebu, Philippines",
    role: "Monitors", type: "audio",
    gear: "",
    note: "Monitor world for ~15 bands — South Border headlining, with Ferdinand Aragon, Joseph Gara, Sepia Times and Phylum",
    photos: 6
  },
  {
    slug: "resolume-arena-playback-for-cebu-pacific",
    date: "2026-03-12",
    title: "Cebu Pacific Awards",
    venue: "", city: "Cebu, Philippines",
    role: "Visuals", type: "visuals",
    gear: "Resolume Arena",
    note: "Playback with 1FD Productions",
    photos: 6
  },
  {
    slug: "island-voices",
    date: "2026-02-19",
    title: "Island Voices",
    venue: "", city: "Philippines",
    role: "FOH Assist", type: "audio",
    gear: "",
    note: "FOH assist with Mark Albers for theislandvoices.sg",
    photos: 8
  },
  {
    slug: "pilmico-corporate-event-foh",
    date: "2026-02-10",
    title: "Pilmico Corporate Event",
    venue: "", city: "Philippines",
    role: "Front of House", type: "audio",
    gear: "Yamaha DM7 Compact",
    note: "",
    photos: 1
  },
  {
    slug: "gigi-de-lana-mayonnaise-monitors",
    date: "2026-01-20",
    title: "Gigi De Lana & Mayonnaise",
    venue: "Ayala Center Cebu", city: "Cebu, Philippines",
    role: "Monitors", type: "audio",
    gear: "",
    note: "",
    photos: 9
  },
  {
    slug: "green-gsm-cebu-launching",
    date: "2025-12-20",
    title: "Green GSM Taxi — Cebu Launching",
    venue: "", city: "Cebu City, Philippines",
    role: "Live Audio", type: "audio",
    gear: "",
    note: "",
    photos: 1
  },
  {
    slug: "globe-telecom-christmas-event",
    date: "2025-12-17",
    title: "Globe Telecom Christmas Event",
    venue: "", city: "Philippines",
    role: "Monitors", type: "audio",
    gear: "",
    note: "Monitor mix for Artpression Band",
    photos: 1
  },
  {
    slug: "secondhand-serenade-mon-assist",
    date: "2025-12-10",
    title: "Secondhand Serenade",
    venue: "Waterfront Hotel", city: "Cebu, Philippines",
    role: "Monitor Assist", type: "audio",
    gear: "",
    note: "Monitor world with Jack Stapost",
    photos: 12
  },
  {
    slug: "jesus-reigns-pre-celeb-san-remegio-mon-mix",
    date: "2025-11-24",
    title: "Jesus Reigns Pre-Celebration",
    venue: "", city: "San Remegio & Bogo City, Philippines",
    role: "Monitors · Playback", type: "audio",
    gear: "Behringer Wing Rack",
    note: "",
    photos: 5
  },
  {
    slug: "micheal-learns-to-rock-cebu",
    date: "2025-11-15",
    title: "Michael Learns to Rock",
    venue: "", city: "Cebu, Philippines",
    role: "Monitor Assist", type: "audio",
    gear: "L-Acoustics + Waves LV1",
    note: "",
    photos: 12
  },
  {
    slug: "camiguin-community-church",
    date: "2025-11-10",
    title: "Camiguin Community Church",
    venue: "", city: "Camiguin, Philippines",
    role: "Live Audio", type: "audio",
    gear: "",
    note: "Mission trip",
    photos: 11
  },
  {
    slug: "future-menus-by-unilever",
    date: "2025-10-18",
    title: "Future Menus by Unilever",
    venue: "", city: "Philippines",
    role: "Front of House", type: "audio",
    gear: "",
    note: "Unilever Philippines Future Menus 2025",
    photos: 6
  },
  {
    slug: "lacoustics-k3-certification",
    date: "2025-10-08",
    title: "L-Acoustics K3 System Implementation",
    venue: "", city: "",
    role: "Certification", type: "cert",
    gear: "",
    note: "Completed and certified",
    photos: 7
  },
  {
    slug: "smart-sorucing-and-lacoustics-k3-arrival-mon-mix",
    date: "2025-10-07",
    title: "Smart Sourcing — K3 Arrival",
    venue: "", city: "Philippines",
    role: "Monitors", type: "audio",
    gear: "L-Acoustics K3",
    note: "Unbox and deploy",
    photos: 7
  },
  {
    slug: "g12-mentoring-bantayan-island",
    date: "2025-09-21",
    title: "G12 Mentoring",
    venue: "Manliling", city: "Bantayan Island, Philippines",
    role: "Live Audio", type: "audio",
    gear: "",
    note: "",
    photos: 5
  },
  {
    slug: "mandue-chamber-of-commerce-60th-business-summit",
    date: "2025-08-27",
    title: "Mandaue Chamber of Commerce — 60th Business Summit",
    venue: "Marco Polo Plaza Hotel", city: "Cebu, Philippines",
    role: "Live Audio", type: "audio",
    gear: "",
    note: "",
    photos: 5
  },
  {
    slug: "multishow-on-a-weekend",
    date: "2025-08-04",
    title: "Multi-show Weekend",
    venue: "", city: "Philippines",
    role: "Live Audio", type: "audio",
    gear: "",
    note: "Several shows and consoles across one weekend",
    photos: 7
  },
  {
    slug: "martin-n-pops-fernandez",
    date: "2025-07-20",
    title: "Martin Nievera & Pops Fernandez",
    venue: "Waterfront Hotel", city: "Cebu, Philippines",
    role: "Live Audio", type: "audio",
    gear: "",
    note: "",
    photos: 9
  },
  {
    slug: "nustar-gala-night",
    date: "2025-05-07",
    title: "NUSTAR Gala Night",
    venue: "NUSTAR Resort", city: "Cebu, Philippines",
    role: "Live Audio", type: "audio",
    gear: "Yamaha DM7",
    note: "With Bren of DOWNLOW Lights and Sounds, and Andy Anderson",
    photos: 8
  },
  {
    slug: "learning-midas-m32",
    date: "2024-11-22",
    title: "MIDAS M32",
    venue: "", city: "",
    role: "Training", type: "cert",
    gear: "MIDAS M32",
    note: "",
    photos: 2
  },
  {
    slug: "jesus-reigns-pre-celebration-2024",
    date: "2024-11-15",
    title: "Jesus Reigns Pre-Celebration 2024",
    venue: "Daanbantayan Cultural Center", city: "Cebu, Philippines",
    role: "Front of House", type: "audio",
    gear: "Soundcraft Ui24R",
    note: "First time mixing front of house",
    photos: 3
  },
  {
    slug: "gears",
    date: "",
    title: "Gear I Work On",
    venue: "", city: "",
    role: "Gear", type: "cert",
    gear: "",
    note: "",
    photos: 11
  }
];
