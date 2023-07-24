import { createAsyncThunk, createSlice, Dispatch } from "@reduxjs/toolkit";
import { StoreState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { getPokeList } from "@pokedex/utils";

type DataType = {
  name: string;
  url: string;
};
interface ResultType {
  name: string;
  url: string;
}
interface PokemonListType {
  count: number;
  next: string;
  previous: string;
  results: ResultType[];
}

const initialState: {
  data: DataType[];
  count: number;
  allData: DataType[][];
  isLoading: boolean;
  pagination: {
    page: number;
    pageSize: number;
  };
} = {
  data: [],
  allData: [],
  count: 0,
  isLoading: false,
  pagination: {
    page: 0,
    pageSize: 10,
  },
};

export const pokeListReducer = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList: (state, action) => {
      state.data = action.payload;
    },
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = {
        ...state.pagination,
        page: action.payload.page,
        pageSize: action.payload.pageSize,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      if (state.pagination.page > action.payload.pokemon.pagination.page) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        ...action?.payload?.pokemon,
      };
    });
  },
});

export const {
  setPokemonList,
  setAllData,
  setCount,
  setIsLoading,
  setPagination,
} = pokeListReducer.actions;
export default pokeListReducer.reducer;

export const selectPokemonListData = (state: StoreState) => state.pokemon.data;
export const selectPokemonAllData = (state: StoreState) => state.pokemon.allData;
export const selectPokemonCount = (state: StoreState) => state.pokemon.count;
export const selectPagination = (state: StoreState) => state.pokemon.pagination;
export const isLoadingPokemon = (state: StoreState) => state.pokemon.isLoading;

export const fetchPockeList =
  (page: number, limit: number = 10) =>
  async (dispatch: Dispatch, getState: () => StoreState) => {
    try {
      const fetchedData = getState().pokemon.allData as DataType[][];
      if (page >= 1 && fetchedData[page - 1]) {
        dispatch(setPokemonList(fetchedData[page - 1]));
      } else {
        dispatch(setIsLoading(true));
        const pageCount = (page - 1) * limit;
        const data: PokemonListType = await getPokeList(pageCount, limit);
        const temp = [...fetchedData, data.results];
        if (data.count !== getState().pokemon.count) {
          dispatch(setCount(data.count));
        }
        dispatch(setAllData(temp));
        dispatch(setPokemonList(data.results));
        dispatch(setIsLoading(false));
      }
    } catch (e) {
      dispatch(setPokemonList([{ name: "Error", ulr: "404 Not Found" }]));
    }
  };
