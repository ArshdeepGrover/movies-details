import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from 'src/app/component/bookmark/bookmark.component';
import { MovieSanityComponent } from 'src/app/component/movie-sanity/movie-sanity.component';
import { MoviesComponent } from 'src/app/component/movie-sanity/movies/movies.component';
import { PracticeComponent } from 'src/app/component/practice/practice.component';
import { SMovieSearchComponent } from 'src/app/component/s-movie-search/s-movie-search.component';


const routes: Routes = [
  { path: "", redirectTo: "MSearch", pathMatch: "full" },
  { path: "MSearch", component: SMovieSearchComponent },
  { path: "Bookmark", component: BookmarkComponent },
  { path: "sanity", component: MovieSanityComponent },
  { path: "movies", component: MoviesComponent },
  { path: "practice", component: PracticeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule { }
