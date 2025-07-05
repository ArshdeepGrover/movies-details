import { MovieService } from "src/app/service/movie.service";
import { FavoritesService } from "src/app/service/favorites.service";
import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { IMovie } from "src/app/model/movie";
import { Subscription } from "rxjs";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"],
})
export class MovieCardComponent implements OnInit, OnDestroy {
  bookmarks!: IMovie[]; //storing Movie objects for localstorage

  @Input() movie!: IMovie;
  movieData: any;
  isFavorite: boolean = false;
  private favoritesSubscription: Subscription;

  constructor(
    private movieService: MovieService,
    private favoritesService: FavoritesService
  ) {
    this.favoritesSubscription = this.favoritesService.favorites$.subscribe(
      (favorites) => {
        this.isFavorite = favorites.some(
          (fav) => fav.imdbID === this.movie?.imdbID
        );
      }
    );
  }

  ngOnInit(): void {
    this.movieService.getDetails(this.movie.imdbID).subscribe({
      next: (movie) => {
        this.movieData = movie;
      },
      error: (error) => {
        console.error("Error loading movie details:", error);
        // Fallback to basic movie data if details fail to load
        this.movieData = this.movie;
      },
    });
  }

  ngOnDestroy(): void {
    if (this.favoritesSubscription) {
      this.favoritesSubscription.unsubscribe();
    }
  }

  toggleFavorite(): void {
    if (this.movieData) {
      this.favoritesService.toggleFavorite(this.movieData);
    }
  }

  viewDetails(): void {
    // For now, just log the movie details
    // In a real app, this would navigate to a details page or open a modal
    console.log("View details for:", this.movieData);
    // You could implement navigation here:
    // this.router.navigate(['/movie', this.movieData.imdbID]);
  }

  onImageError(event: any): void {
    // Set a placeholder image when the movie poster fails to load
    event.target.src = "assets/placeholder-movie.jpg";
  }

  addBookmark(currentMovie: IMovie) {
    // localStorage.setItem("Name", "Blank" )

    // console.log(this.bookmarks);
    currentMovie.active = !currentMovie.active;

    const getBookmarks = localStorage.getItem("bookmarks");

    if (getBookmarks == null) {
      // if there are no bookmarks initialize bookmarks with an empty array
      this.bookmarks = [];
    } else {
      this.bookmarks = JSON.parse(getBookmarks); // else parse & assign the data
    }

    let movieFound: boolean = false; // checking whether the selected movie is already present

    for (let i = 0; i < this.bookmarks.length; i++) {
      if (this.bookmarks[i].imdbID == currentMovie.imdbID) {
        movieFound = true;
      }
    }

    if (movieFound) {
      // if present do nothing
      console.log("Movie is already present!");
      alert("This Movie already Bookmarked, Please Check Bookmark Section");
    } else {
      // if not present add it to bookmarks and set it to localstorage
      this.bookmarks.push(currentMovie);
      localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks));
    }
  }

  removeBookmark(currentMovieTitle: String) {
    //will recieve the movie which needs to be remove from bookmarks

    for (let i = 0; i < this.bookmarks.length; i++) {
      if (this.bookmarks[i].Title === currentMovieTitle) {
        //If the title of current Movie is present in the bookmarks, remove it
        this.bookmarks.splice(i, 1);
        localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks)); // update local storage
        return;
      }
    }
  }
}
