import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { MovieSanityComponent } from './movie-sanity/movie-sanity.component';
import { MoviesComponent } from './movie-sanity/movies/movies.component';
import { SMovieSearchComponent } from './s-movie-search/s-movie-search.component';

const routes: Routes = [
  {path:'',redirectTo:'MSearch', pathMatch:'full'},
  { path:'MSearch',component:SMovieSearchComponent},
  { path:'Bookmark',component:BookmarkComponent},
  { path:'sanity',component:MovieSanityComponent},
  { path: 'movies', component: MoviesComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule { }
