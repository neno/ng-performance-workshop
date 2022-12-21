import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, tap } from 'rxjs';
import { Pokemon, PokemonDetail } from './types';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  baseApi = `https://pokeapi.co/api/v2/pokemon`;

  constructor(private http: HttpClient) { }

  loadAllPokemons(): Observable<Pokemon[]> {
    return this.http.get<{results: Pokemon[]}>(`${this.baseApi}?limit=300`).pipe(
      map((data) => data.results)
    );
  }

  loadPokemonById(id: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.baseApi}/${id}`)
  }

}
