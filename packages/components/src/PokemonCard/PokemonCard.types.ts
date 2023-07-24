export type AbilitiesType = {
  ability: {
    name: string;
    url: string;
  };
};
export interface CardType {
  name: string;
  height?: number;
  weight?: number;
  location?: string;
  abilities?: AbilitiesType[];
  image?: string;
}
