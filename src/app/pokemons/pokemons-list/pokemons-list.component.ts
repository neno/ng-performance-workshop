import { AfterViewChecked, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '@app/pokemons/types';

const randomIntFromInterval = (min: number, max: number): number => { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
})
export class PokemonsListComponent implements OnInit, AfterViewChecked {
  @Input() pokemons: Pokemon[] = [];
  @Input() btnLabel!: string;
  @Output() handleSearch = new EventEmitter<string>();
  @Output() handleCartAction = new EventEmitter<Pokemon>();
  @Output() handleSelect = new EventEmitter<Pokemon>();

  imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
  searchName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    // console.log('PokemonsListComponent');
  }

  pokemonImageUrl(pokemon: Pokemon) {
    return `${this.imageUrl}${pokemon.id}.png`;
  }

  calculateScore(pokemon: Pokemon) {
    const score = fibonacci(pokemon.name.length * 3);
    return score;
  }

  onKeydown() {
    this.handleSearch.emit(this.searchName);
  }
}
