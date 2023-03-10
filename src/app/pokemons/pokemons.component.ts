import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';
import { Pokemon } from './types';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
})
export class PokemonsComponent implements OnInit, AfterViewChecked {
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  cart: Pokemon[] = [];
  filteredCart: Pokemon[] = [];
  showCart: boolean = false;
  selectedPokemon: Pokemon | undefined;

  constructor(private pokemonService: PokemonsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pokemonService.loadAllPokemons().subscribe(data => {
      data.forEach((poke) => {
        const id = poke.url.split('/')[poke.url.split('/').length - 2];
        this.pokemons.push({...poke, id});
        this.filteredPokemons.push({...poke, id});
      });
    });
  }

  ngAfterViewChecked() {
    // console.log('AppComponent', this);
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
    this.router.navigate([pokemon.id], { relativeTo: this.activatedRoute });
  }
}
