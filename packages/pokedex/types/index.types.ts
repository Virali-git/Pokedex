export interface ResultType{
    name:string,
    url:string
}
export interface PokemonListType {
  count: number;
  next: string;
  previous: string;
  results: ResultType[];
}
export type AbilityType = {
  ability: {
    name: string;
    url: string;
  };
};
export type PokemonType = {
  id:number;
  name: string;
  height?: number;
  weight?: number;
  location_area_encounters?: string;
  abilities?: AbilityType[];
  image?:string;
  
};
export interface IPageModel {
  page: number;
  pageSize: number;
}
