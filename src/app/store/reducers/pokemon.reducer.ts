// import { Action } from '@ngrx/store'
import * as PostActions from '../actions/pokemon.actions'
import { Post } from '../../shared/models/post.model'
import { Pokemon } from 'src/app/shared/models/pokemon.type'

export type Action = PostActions.All

const defaultState = {}


const newStatDetail = (state: Post, newData: any) => {
    return Object.assign({}, state, newData)
}


export function pokemonReducer(state: Pokemon = defaultState as Pokemon, action: Action) {
    switch (action.type) {
        case PostActions.POKEMON_SELECTED:
            return newStatDetail(state, { "pokemonSelected": action.payload })
        default:
            return state;
    }

}