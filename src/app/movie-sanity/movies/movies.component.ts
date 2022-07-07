import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/smovie';
import { SanityService } from 'src/app/service/sanity.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private sanityService: SanityService) { }

  movies: Movie[] = [];

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit(): void {
    this.getMovies();
  }
  async getMovies(): Promise<Movie[]>  {
    this.movies = await this.sanityService.getMovies();
    return this.movies;
  }
}
