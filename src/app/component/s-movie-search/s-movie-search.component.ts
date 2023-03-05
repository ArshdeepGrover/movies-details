import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { IMovie } from "src/app/model/movie";
import { MovieService } from "src/app/service/movie.service";

@Component({
  selector: "app-s-movie-search",
  templateUrl: "./s-movie-search.component.html",
  styleUrls: ["./s-movie-search.component.scss"],
})
export class SMovieSearchComponent implements OnInit {
  query!: string;
  movies: IMovie[] = [];
  inputForm;
  moviesFound: boolean = true;
  isLoading: boolean = false;
  page = 1;

  constructor(private movieService: MovieService, private fb: FormBuilder) {
    this.inputForm = new FormGroup({
      movie: new FormControl(""),
    });
  }

  ngOnInit() {
    this.movieService.searchMovie("hello", 2).subscribe((movies) => {
      if (movies) {
        this.movies = movies.Search;
      } else {
        this.moviesFound = false;
      }
    });
  }

  getMovieSearchResult() {
    // this.movies = this.movieService.searchMovie(this.query);
  }

  onSubmit() {
    this.isLoading = true;
    this.movieService
      .searchMovie(this.inputForm.controls["movie"].value, this.page)
      .subscribe((data) => {
        this.movies = data.Search;
        if (data.Error) {
          this.moviesFound = false;
        }
        this.isLoading = false;
      });
  }
}
