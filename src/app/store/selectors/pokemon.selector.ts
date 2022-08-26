import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.component";

const getAppState = createFeatureSelector<AppState>('pokemon');

export const getPokemon = createSelector(getAppState, (state) => {
    return state.pokemon
})