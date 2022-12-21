import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Pokemon } from './types';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  baseApi = `http://localhost:9000/pokemons`;

  constructor(private http: HttpClient) { }

  loadAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.baseApi}?_limit=100`);
  }

  loadPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseApi}?name=${name}`)
  }

}
