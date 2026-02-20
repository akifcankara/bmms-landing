export interface HeroBadge {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
}

export interface HeroAction {
  id: number;
  documentId: string;
  label: string;
  href: string;
  type: 'primary' | 'outlined';
}

export interface Hero {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  muted: string;
}

interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
  mime: string;
}

interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats: {
    large?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    small?: StrapiImageFormat;
    thumbnail?: StrapiImageFormat;
  };
}

export interface HeroImage {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  image: StrapiImage;
}
