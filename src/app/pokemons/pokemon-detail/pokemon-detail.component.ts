import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonDetail } from '@app/pokemons/types';
import { Observable } from 'rxjs';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent implements OnInit, OnChanges {
  // @Input() selectedPokemon!: Pokemon;
  pokemon!: PokemonDetail;

  imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonsService) {
    this.route.params.subscribe((params) => {
      this.pokemonService.loadPokemonById(params['id']).subscribe((data) => {
        this.pokemon = {...data, id: params['id']};
      })
    })
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges', changes);
  }

  get imgSrc() {
    return `${this.imageUrl}${this.pokemon.id}.png`;
  }

  get abilities(): string {
    return this.pokemon.abilities.map((item) => item.ability.name).join(', ');
  }

  get games(): string {
    return this.pokemon.game_indices.map(({game_index}) => game_index).join(', ');
  }

}
