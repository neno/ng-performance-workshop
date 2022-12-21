export interface Pokemon {
  id: string;
  name: string;
  url: string;
}

export interface PokemonDetail extends Pokemon {
  abilities: { ability: { name: string; url: string; }; }[];
  game_indices: { game_index: number; }[]
}
