import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { StoreState, StoreThunk } from "./store";
import { HYDRATE } from "next-redux-wrapper";

import { getPokeDetail } from "@pokedex/utils";

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
const initialState: { data: PokemonType | null } = { data: null };

export const pokeDetailReducer = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {
    setPokemonDetail(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.pokemonDetail,
      };
    });
  },
});

export const { setPokemonDetail } = pokeDetailReducer.actions;
export default pokeDetailReducer.reducer;

export const selectPokemonDetail = (state: StoreState) =>
  state.pokemonDetail.data;

export const fetchPockenDetail =
  (name: string) =>
  async (dispatch:Dispatch) => {
    try {
      const res = await getPokeDetail(name);
      return dispatch(setPokemonDetail(res)); 
    } catch {
      dispatch(setPokemonDetail(null));
    }
  };
