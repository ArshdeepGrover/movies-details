import { Component, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { Router } from "@angular/router";
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
  moviesNotFound: boolean = false;
  isLoading: boolean = false;
  page = 1;

  constructor(private movieService: MovieService, private router: Router) {
    this.inputForm = new UntypedFormGroup({
      movie: new UntypedFormControl("avengers"),
    });
  }

  ngOnInit() {
    this.router.navigate([""], {
      queryParams: {
        search: "avengers",
      },
    });
    this.movieService.searchMovie("avengers", 2).subscribe((movies) => {
      console.log(movies.Response);
      if (movies.Response === "True") {
        this.movies = movies.Search;
      } else if (movies.Error) {
        this.moviesNotFound = true;
      }
    });
  }

  getMovieSearchResult() {
    // this.movies = this.movieService.searchMovie(this.query);
  }

  onSubmit() {
    this.moviesNotFound = false;
    this.isLoading = true;
    this.router.navigate([""], {
      queryParams: {
        search: this.inputForm.controls["movie"].value,
        page: this.page,
      },
    });

    this.movieService
      .searchMovie(this.inputForm.controls["movie"].value, this.page)
      .subscribe((data) => {
        this.movies = data.Search;
        this.isLoading = false;
        if (data.Error) {
          this.moviesNotFound = true;
        }
      });
  }
}
