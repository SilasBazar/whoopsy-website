export interface Game {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tagline: string;
  features: string[];
  images: {
    capsule: string;
    header?: string;
    library?: string;
  };
  steamUrl?: string;
  releaseDate?: string;
  status: 'released' | 'announced' | 'wip';
}