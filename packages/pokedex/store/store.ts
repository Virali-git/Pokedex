import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { pokeListReducer } from "./pokeList";
import { pokeDetailReducer } from "./pokeDetail";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
  configureStore({
    reducer: {
      [pokeListReducer.name]: pokeListReducer.reducer,
      [pokeDetailReducer.name]: pokeDetailReducer.reducer,
    },
    devTools: true,
  });
export type DispatchAction = ReturnType<typeof makeStore>['dispatch'];  
export type ReduxStore = ReturnType<typeof makeStore>;
export type StoreState = ReturnType<ReduxStore["getState"]>;
export type StoreThunk<ActionTypes extends Action,ReturnType = void> = ThunkAction<
  ReturnType,
  StoreState,
  unknown,
  ActionTypes
>;

export const wrapper = createWrapper<ReduxStore>(makeStore);
