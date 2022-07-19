import { Component, OnInit } from "@angular/core";
import { IMovie } from "src/app/model/movie";

@Component({
  selector: "app-bookmark",
  templateUrl: "./bookmark.component.html",
  styleUrls: ["./bookmark.component.scss"],
})
export class BookmarkComponent implements OnInit {
  bookmarks!: IMovie[];

  constructor() {}

  ngOnInit(): void {
    this.getBookmarks();
  }

  getBookmarks() {
    const data = localStorage.getItem("bookmarks"); // get the bookmarks from local Storage

    if (data != null) {
      // if user has bookmarked some movies then parse and assign the data
      this.bookmarks = JSON.parse(data);
      console.log("Bookmarked");
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
