import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbThemeService,
  NbCardModule,
  NbThemeModule,
  NbListModule,
  NbTabsetModule,
  NbIconModule,
  NbContextMenuModule,
  NbMenuModule,
} from "@nebular/theme";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MovesInterceptor } from "./moves.interceptor";
import { BookmarkComponent } from "src/app/component/bookmark/bookmark.component";
import { MovieCardComponent } from "src/app/component/movie-card/movie-card.component";
import { MovieSanityComponent } from "src/app/component/movie-sanity/movie-sanity.component";
import { MoviesComponent } from "src/app/component/movie-sanity/movies/movies.component";
import { SMovieSearchComponent } from "src/app/component/s-movie-search/s-movie-search.component";
import { MovieService } from "src/app/service/movie.service";
import { ThemeService } from "src/app/service/theme.service";
import { FavoritesService } from "src/app/service/favorites.service";
import { PracticeComponent } from "./component/practice/practice.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { FooterComponent } from "src/app/component/footer/footer.component";
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { LoadingAnimationComponent } from "./component/loading-animation/loading-animation.component";
import { ProfileComponent } from "./component/profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    SMovieSearchComponent,
    MovieCardComponent,
    BookmarkComponent,
    MovieSanityComponent,
    MoviesComponent,
    PracticeComponent,
    NavbarComponent,
    FooterComponent,
    LoadingAnimationComponent,
    ProfileComponent,
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
    NbEvaIconsModule,
    NbContextMenuModule,
    NbMenuModule.forRoot(),
    NgxSliderModule,
  ],
  providers: [
    MovieService,
    ThemeService,
    FavoritesService,
    { provide: HTTP_INTERCEPTORS, useClass: MovesInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
