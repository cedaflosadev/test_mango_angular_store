
import { Action } from "@ngrx/store";
import { Pokemon } from "../../shared/models/pokemon.type";
export const POKEMON_SELECTED = '[Pokemon] Add Pokemon Selected';
export class PokemonSelected implements Action {
    readonly type = POKEMON_SELECTED;

    constructor(public payload: Pokemon) { }
}

export type All = PokemonSelected;

