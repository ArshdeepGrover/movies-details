import { MovieService } from "src/app/service/movie.service";
import { Component, Input, OnInit } from "@angular/core";
import { IMovie } from "src/app/model/movie";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent implements OnInit {
  bookmarks!: IMovie[]; //storing Movie objects for localstorage

  @Input() movie!: IMovie;
  movieData: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getDetails(this.movie.imdbID).subscribe((movie) => {this.movieData = movie;});
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
