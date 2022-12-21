import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './docs/chapters/change-detection/change-detection.component';
import { MemoryLeaksComponent } from './docs/chapters/memory-leaks/memory-leaks.component';
import { DocsComponent } from './docs/docs.component';

const routes: Routes = [
  { path: 'docs', children: [
    { path: 'chapters/change-detection', component: ChangeDetectionComponent },
    { path: 'chapters/memory-leaks', component: MemoryLeaksComponent },
    { path: '', component: DocsComponent, pathMatch: 'full' }
  ]},
  { path: 'pokemons', loadChildren: () => import('./pokemons/pokemons.module').then((m) => m.PokemonsModule) },
  { path: '', redirectTo: 'docs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
