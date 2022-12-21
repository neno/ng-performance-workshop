import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from '@app/pokemons/types';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit, OnChanges {
  @Input() selectedPokemon!: Pokemon;

  imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges', changes);
  }

  get imgSrc() {
    const id = this.selectedPokemon.url.split('/')[this.selectedPokemon.url.split('/').length - 2];
    return `${this.imageUrl}${id}.png`;
  }

}
