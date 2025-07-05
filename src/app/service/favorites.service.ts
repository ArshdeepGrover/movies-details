import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IMovie } from "src/app/model/movie";

@Injectable({
  providedIn: "root",
})
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<IMovie[]>([]);
  public favorites$ = this.favoritesSubject.asObservable();

  constructor() {
    this.loadFavorites();
  }

  private loadFavorites(): void {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      const favorites = JSON.parse(savedFavorites);
      this.favoritesSubject.next(favorites);
    }
  }

  private saveFavorites(favorites: IMovie[]): void {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);
  }

  getFavorites(): Observable<IMovie[]> {
    return this.favorites$;
  }

  addToFavorites(movie: IMovie): void {
    const currentFavorites = this.favoritesSubject.value;
    const exists = currentFavorites.find((fav) => fav.imdbID === movie.imdbID);

    if (!exists) {
      const updatedFavorites = [...currentFavorites, movie];
      this.saveFavorites(updatedFavorites);
    }
  }

  removeFromFavorites(imdbID: string): void {
    const currentFavorites = this.favoritesSubject.value;
    const updatedFavorites = currentFavorites.filter(
      (fav) => fav.imdbID !== imdbID
    );
    this.saveFavorites(updatedFavorites);
  }

  isFavorite(imdbID: string): boolean {
    const currentFavorites = this.favoritesSubject.value;
    return currentFavorites.some((fav) => fav.imdbID === imdbID);
  }

  toggleFavorite(movie: IMovie): void {
    if (this.isFavorite(movie.imdbID)) {
      this.removeFromFavorites(movie.imdbID);
    } else {
      this.addToFavorites(movie);
    }
  }

  clearFavorites(): void {
    this.saveFavorites([]);
  }
}
