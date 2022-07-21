import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieSearcherComponent} from './movie-searcher/movie-searcher.component'
import {MovieDetailsComponent} from './movie-details/movie-details.component'

const routes: Routes = [
  { path: '', component: MovieSearcherComponent },
  { path: 'movie/:id', component: MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
