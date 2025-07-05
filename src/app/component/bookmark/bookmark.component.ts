import { Component, OnInit, OnDestroy } from "@angular/core";
import { IMovie } from "src/app/model/movie";
import { FavoritesService } from "src/app/service/favorites.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-bookmark",
  templateUrl: "./bookmark.component.html",
  styleUrls: ["./bookmark.component.scss"],
})
export class BookmarkComponent implements OnInit, OnDestroy {
  bookmarks!: IMovie[];
  favorites: IMovie[] = [];
  private favoritesSubscription: Subscription;

  constructor(private favoritesService: FavoritesService) {
    this.favoritesSubscription = this.favoritesService.favorites$.subscribe(
      (favorites) => {
        this.favorites = favorites;
      }
    );
  }

  ngOnInit(): void {
    this.getBookmarks();
  }

  ngOnDestroy(): void {
    if (this.favoritesSubscription) {
      this.favoritesSubscription.unsubscribe();
    }
  }

  getBookmarks() {
    const data = localStorage.getItem("bookmarks"); // get the bookmarks from local Storage

    if (data != null) {
      // if user has bookmarked some movies then parse and assign the data
      this.bookmarks = JSON.parse(data);
    }
  }

  clearAllFavorites(): void {
    if (confirm("Are you sure you want to clear all favorites?")) {
      this.favoritesService.clearFavorites();
    }
  }

  trackByMovie(index: number, movie: IMovie): string {
    return movie.imdbID;
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
