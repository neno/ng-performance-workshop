import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, OnChanges, OnInit } from '@angular/core';
import { Pokemon } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  baseUrl = `http://localhost:9000/pokemons?_limit=100`;
  pokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  favorites: Pokemon[] = [];
  filteredFavorites: Pokemon[] = [];
  showFavorites: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Pokemon[]>(this.baseUrl).subscribe(data => {
      // this.pokemons = data.sort((a, b) => (a.name < b.name ? -1 : 1));
      this.pokemons = data;
      this.filteredPokemons = data;
    });
  }

  ngAfterViewChecked() {
    // console.trace();
    console.log('AppComponent');
  }

  addFavorite(pokemon: Pokemon) {
    const index = this.pokemons.indexOf(pokemon);
    this.favorites.push(pokemon);
    this.filteredFavorites = this.favorites;
    this.pokemons.splice(index, 1);
    this.filteredPokemons = this.pokemons;
  }

  removeFavorite(pokemon: Pokemon) {
    const index = this.favorites.indexOf(pokemon);
    this.pokemons.push(pokemon);
    this.filteredPokemons = this.pokemons;
    this.favorites.splice(index, 1);
    this.filteredFavorites = this.favorites;
  }

  filterPokemons(name: string) {
    if (name) {
      this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name.includes(name));
    } else {
      this.filteredPokemons = this.pokemons;
    }
  }

  filterFavorites(name: string) {
    if (name) {
      this.filteredFavorites = this.favorites.filter(pokemon => pokemon.name.includes(name));
    } else {
      this.filteredFavorites = this.favorites;
    }
  }

  toggleFavorites() {
    this.showFavorites = !this.showFavorites;
  }
}
