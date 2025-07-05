import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { IMovie } from "src/app/model/movie";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  private apiUrl = `https://www.omdbapi.com/?apikey=3f9071e1&`;

  constructor(private http: HttpClient) {}

  searchMovie(searchQuery: string, page: number): Observable<any> {
    const params = new HttpParams().set("s", searchQuery).set("page", page);
    return this.http.get<any>(this.apiUrl, { params });
  }

  getDetails(imdbId: string): Observable<any> {
    const params = new HttpParams().set("i", imdbId).set("plot", "full");
    return this.http.get<any>(this.apiUrl, { params });
  }
}
