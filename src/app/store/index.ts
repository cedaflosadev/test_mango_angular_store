

import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { hydrationMetaReducer } from "./hydration/hydration.reducer";
import { pokemonReducer } from "./reducers/pokemon.reducer";

export interface RootState {
    count: number
}

export const reducers: ActionReducerMap<any, any> = {
    pokemon: pokemonReducer
}

export const metaReducers: MetaReducer[] = [
    hydrationMetaReducer
]