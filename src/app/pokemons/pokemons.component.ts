import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { PokemonsService } from './pokemons.service';
import { Pokemon } from './types';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit, AfterViewChecked {
  baseUrl = `http://localhost:9000/pokemons?_limit=100`;
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  cart: Pokemon[] = [];
  filteredCart: Pokemon[] = [];
  showCart: boolean = false;
  selectedPokemon: Pokemon | undefined;

  constructor(private pokemonService: PokemonsService) {}

  ngOnInit() {
    this.pokemonService.loadAllPokemons().subscribe(data => {
      this.pokemons = data.sort((a, b) => (a.name < b.name ? -1 : 1));
      this.pokemons = data;
      this.filteredPokemons = data;
    });
  }

  ngAfterViewChecked() {
    // console.log('AppComponent');
  }

  addFavorite(pokemon: Pokemon) {
    const index = this.pokemons.indexOf(pokemon);
    this.cart.push(pokemon);
    this.filteredCart = this.cart;
    this.pokemons.splice(index, 1);
    this.filteredPokemons = this.pokemons;
  }

  removeFavorite(pokemon: Pokemon) {
    const index = this.cart.indexOf(pokemon);
    this.pokemons.push(pokemon);
    this.filteredPokemons = this.pokemons;
    this.cart.splice(index, 1);
    this.filteredCart = this.cart;
  }

  filterPokemons(name: string) {
    if (name) {
      this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name.includes(name));
    } else {
      this.filteredPokemons = this.pokemons;
    }
  }

  filterCart(name: string) {
    if (name) {
      this.filteredCart = this.cart.filter(pokemon => pokemon.name.includes(name));
    } else {
      this.filteredCart = this.cart;
    }
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }

  selectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
}
