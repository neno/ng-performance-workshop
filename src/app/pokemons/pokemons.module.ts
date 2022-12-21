import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonsComponent } from './pokemons.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { ScrollDirective } from './scroll.directive';

@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonDetailComponent,
    PokemonsComponent,
    ScrollDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ]
})
export class PokemonsModule { }
