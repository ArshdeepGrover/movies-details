import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',

})
export class MovieService {


  private moviesUrl = 'bookmark';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient

  ) { }
  searchMovie(searchQuery: string): Observable<Array<Movie>> {
    return this.http.get(`&s=${searchQuery}`)
      .pipe(
        map((response: any) => response.Search)
      );
  }

  getDetails(imdbId: string | null): Observable<any> {
    return this.http.get(`&i=${imdbId}&plot=short`);

  }
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(
        tap(_ => this.log('fetched Movies')),
        catchError(this.handleError<Movie[]>('getMovies', []))
      );
  }
  getMovie(imdbID: string): Observable<Movie> {
    const url = `${this.moviesUrl}/${imdbID}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => this.log(`fetched Movie imdbID=${imdbID}`)),
      catchError(this.handleError<Movie>(`getMovie imdbID=${imdbID}`))
    );
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, this.httpOptions).pipe(
      tap((newMovie: Movie) => this.log(`added Movie w/ imdbID=${newMovie.imdbID}`)),
      catchError(this.handleError<Movie>('addMovie'))
    );
  }
  deleteMovie(imdbID: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${imdbID}`;

    return this.http.delete<Movie>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Movie imdbID=${imdbID}`)),
      catchError(this.handleError<Movie>('deleteMovie'))
    );
  }
  updateMovie(Movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, Movie, this.httpOptions).pipe(
      tap(_ => this.log(`updated Movie imdbID=${Movie.imdbID}`)),
      catchError(this.handleError<any>('updateMovie'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a MovieService message with the MessageService */
  private log(message: string) {
    console.log("upadtes Movie");
  }
}


