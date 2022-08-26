export type Pokemonres = {
  count: number;
  next: string;
  previous: string;
  results: Array<Pokemon>
}

export type Pokemon = {
  name: string;
  url: string
}

export type PokemonAvi = {
  is_hidden: boolean;
  pokemon: Pokemon;
  slot: number
}



export type AvaibiltyModel = {
  effect_changes: Array<any>;
  effect_entries: Array<any>;
  flavor_text_entries: Array<any>;
  generation: Pokemon;
  id: number;
  is_main_series: boolean;
  name: string;
  names: Array<any>;
  pokemon: PokemonAvi

}


export type Ability = {
  name: string;
  string: string;
}

export type Abilities = {
  ability: Ability;
  is_hidden: boolean;
  slot: 1
}

export type Formp = {
  name: string;
  url: string
}

export type Version = {
  name: string;
  url: string
}

export type GameIndexs = {
  game_index: number
  version: Version
}

export type Move = {
  name: string;
  url: string
}

export type MoveLearnMethod = {
  name: string
  url: string
}
export type VersionGroup = {
  name: string
  url: string
}

export type VersionDetail = {
  level_learned_at: number;
  move_learned_method: MoveLearnMethod;
  version_group: VersionGroup;
}


export type Moves = {
  move: Move;
  version_group_details: Array<VersionDetail>
}


export type Species = {
  name: string;
  url: string
}

export type Stat = {
  name: string;
  url: string
}

export type Stats = {
  base_stat: number
  effort: number
  stat: Stat
}


export type Type = {
  name: string;
  url: string
}

export type Types = {
  slot: number;
  type: Type
}

export type Sprite = {
  front_shiny: string
  front_default: string
}

export type PokemonModal = {
  abilities: Array<Abilities>;
  forms: Array<Formp>;
  moves: Array<Moves>;
  name: string;
  weight: string;
  height: number;
  stats: Array<Stats>
  types: Array<Types>
  sprites: Sprite
}

export type PokemonDetail = {

  abilities: Array<Abilities>;
  base_experience: number;
  forms: Array<Formp>;
  game_indices: Array<GameIndexs>;
  height: number;
  held_items: Array<any>;// HAY QUE VER QUE OBJETO ES 
  id: number;
  is_default: boolean;
  weight: string;
  location_area_encounters: string;
  moves: Array<Moves>;
  name: string;
  order: number;
  past_types: Array<any>// HAY QUE VER QUE OBJETO ES 
  species: Species
  sprites: Sprite
  stats: Array<Stats>
  types: Array<Types>
}