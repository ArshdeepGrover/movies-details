import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbSidebarModule, NbLayoutModule, NbButtonModule, NbThemeService, NbCardModule, NbThemeModule,NbListModule, NbTabsetModule,NbIconModule} from '@nebular/theme';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SMovieSearchComponent } from './s-movie-search/s-movie-search.component';
import { MovieComponent } from './movie/movie.component';

import { MovieService } from './movie.service';
import { MovesInterceptor } from './moves.interceptor';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieSanityComponent } from './movie-sanity/movie-sanity.component';
import { MoviesComponent } from './movie-sanity/movies/movies.component';




@NgModule({
  declarations: [
    AppComponent,
    SMovieSearchComponent,
    MovieComponent,
    BookmarkComponent,
    MovieSanityComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    HttpClientModule,
    NbCardModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    NbListModule,
    NbTabsetModule,
    NbIconModule,
    NbEvaIconsModule

  ],
  providers: [MovieService,
      {provide: HTTP_INTERCEPTORS, useClass: MovesInterceptor, multi: true}
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
