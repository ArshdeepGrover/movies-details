import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
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
  lastSearchTerm: string = "";
  quickFilters: string[] = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Sci-Fi",
    "Thriller",
    "Adventure",
  ];
  trendingMovies: IMovie[] = [];

  constructor(private movieService: MovieService, private router: Router) {
    this.inputForm = new FormGroup({
      movie: new FormControl(""),
    });
  }

  ngOnInit() {
    this.loadTrendingMovies();
  }

  loadTrendingMovies() {
    // Load some popular movies as trending
    const popularMovies = [
      "The Dark Knight",
      "Inception",
      "Interstellar",
      "Pulp Fiction",
      "Fight Club",
      "The Matrix",
    ];
    this.isLoading = true;

    // Load multiple trending movies
    const searchPromises = popularMovies
      .slice(0, 3)
      .map((movie) => this.movieService.searchMovie(movie, 1).toPromise());

    Promise.all(searchPromises)
      .then((results) => {
        const allMovies: IMovie[] = [];
        results.forEach((result) => {
          if (
            result &&
            result.Response === "True" &&
            result.Search &&
            result.Search.length > 0
          ) {
            allMovies.push(...result.Search);
          }
        });
        this.trendingMovies = allMovies.slice(0, 6); // Show 6 trending movies
        this.isLoading = false;
      })
      .catch((error) => {
        console.error("Error loading trending movies:", error);
        this.isLoading = false;
      });
  }

  getMovieSearchResult() {
    // this.movies = this.movieService.searchMovie(this.query);
  }

  onSubmit() {
    const searchTerm = this.inputForm.controls["movie"].value;
    if (!searchTerm.trim()) return;

    this.lastSearchTerm = searchTerm;
    this.moviesNotFound = false;
    this.isLoading = true;
    this.router.navigate([""], {
      queryParams: {
        search: searchTerm,
        page: this.page,
      },
    });

    this.movieService.searchMovie(searchTerm, this.page).subscribe({
      next: (data) => {
        this.movies = data.Search || [];
        this.isLoading = false;
        if (data.Error || !data.Search || data.Search.length === 0) {
          this.moviesNotFound = true;
        }
      },
      error: (error) => {
        console.error("Error searching movies:", error);
        this.isLoading = false;
        this.moviesNotFound = true;
      },
    });
  }

  searchByFilter(filter: string) {
    this.inputForm.controls["movie"].setValue(filter);
    this.onSubmit();
  }

  clearSearch() {
    this.inputForm.controls["movie"].setValue("");
    this.movies = [];
    this.moviesNotFound = false;
    this.lastSearchTerm = "";
    this.router.navigate([""]);
  }

  trackByMovie(index: number, movie: IMovie): string {
    return movie.imdbID;
  }
}
