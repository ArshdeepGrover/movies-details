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
  movies!: Observable<Array<IMovie>>;
  inputForm!: FormGroup;

  constructor(private movieService: MovieService, private fb: FormBuilder) {}

  ngOnInit() {
    this.inputForm = new FormGroup({
      movie: new FormControl(""),
    });
  }

  getMovieSearchResult() {
    this.movies = this.movieService.searchMovie(this.query);
  }

  onSubmit() {
    this.movies = this.movieService.searchMovie(
      this.inputForm.controls["movie"].value
    );
    console.log("submit Works");
    localStorage.setItem("Name", this.query);
  }
}
