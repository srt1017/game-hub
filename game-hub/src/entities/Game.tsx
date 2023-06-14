import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    platform: Platform;
  };
  metacritic: number;
  rating_top: number;
}
