export interface CardProps {
  poster: string;
  title: string;
  plot: string;
  released: Date;
  genres: string[];
  type: string;
  runtime: number;
  onClick?: () => void;
}
