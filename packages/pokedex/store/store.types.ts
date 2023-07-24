export type IAbilityType = {
    ability: {
      name: string;
      url: string;
    };
  };
  export type IPokemonType = {
    id: number;
    name: string;
    height?: number;
    weight?: number;
    location_area_encounters?: string;
    abilities?: IAbilityType[];
    image?: string;
  };