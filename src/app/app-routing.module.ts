import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SMovieSearchComponent } from './s-movie-search/s-movie-search.component';

const routes: Routes = [
  {path:'',redirectTo:'MSearch', pathMatch:'full'},
  { path:'MSearch',component:SMovieSearchComponent},
  { path:'Bookmark',component:BookmarkComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule { }
