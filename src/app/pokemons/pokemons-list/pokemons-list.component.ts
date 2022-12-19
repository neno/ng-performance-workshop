import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '@app/types';

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
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit, AfterViewChecked {
  @Input() pokemons: Pokemon[] = [];
  @Input() btnLabel!: string;
  @Output() handleSearch = new EventEmitter<string>();
  @Output() handleSelect = new EventEmitter<Pokemon>();
  // @Output() addFavorite = new EventEmitter<string>();
  // @Output() removeFavorite = new EventEmitter<Pokemon>();


  imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
  searchName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    console.log('PokemonsListComponent');

    // console.trace();
  }

  pokemonImageUrl(pokemon: Pokemon) {
    const id = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
    return `${this.imageUrl}${id}.png`;
  }

  calculateScore(pokemon: Pokemon) {
    // const n = randomIntFromInterval(1, 36);
    // const n = randomIntFromInterval(1, 26);
    // return fibonacci(n);
    const score = fibonacci(pokemon.name.length * 3);
    // console.log('calculateScore', score);
    return score;
  }

  onKeydown(event: KeyboardEvent) {
    this.handleSearch.emit(this.searchName);
  }
}
