// Neutral placeholders until verified photography is supplied. Set `src` to a file in /public/gallery to replace one.
export interface GalleryItem {
  id: string;
  caption: string;
  category: string;
  src: string | null;
  alt: string;
}

export const gallery: GalleryItem[] = [
  { id: "g1", caption: "Executive workshop", category: "Training", src: null, alt: "Placeholder for an executive workshop photograph" },
  { id: "g2", caption: "Certification cohort", category: "Certification", src: null, alt: "Placeholder for a certification cohort photograph" },
  { id: "g3", caption: "Advisory session", category: "Advisory", src: null, alt: "Placeholder for an advisory session photograph" },
  { id: "g4", caption: "Leadership forum", category: "Events", src: null, alt: "Placeholder for a leadership forum photograph" },
  { id: "g5", caption: "Regional engagement", category: "Events", src: null, alt: "Placeholder for a regional engagement photograph" },
  { id: "g6", caption: "Digital briefing", category: "Digital", src: null, alt: "Placeholder for a digital briefing photograph" },
  { id: "g7", caption: "Boardroom roundtable", category: "Advisory", src: null, alt: "Placeholder for a boardroom roundtable photograph" },
  { id: "g8", caption: "Programme graduation", category: "Certification", src: null, alt: "Placeholder for a programme graduation photograph" },
  { id: "g9", caption: "Analytics clinic", category: "Digital", src: null, alt: "Placeholder for an analytics clinic photograph" },
];
