import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { StoreState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

import { getPokeDetail } from "@pokedex/utils";
import {IPokemonType} from "./store.types";


const initialState: { data: IPokemonType | null } = { data: null };

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
  (name: string) => async (dispatch: Dispatch) => {
    try {
      const res = await getPokeDetail(name);
      return dispatch(setPokemonDetail(res));
    } catch {
      dispatch(setPokemonDetail(null));
    }
  };
