import { Component, Inject, OnInit } from "@angular/core";
import { NB_WINDOW, NbMenuService } from "@nebular/theme";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-practice",
  templateUrl: "./practice.component.html",
  styleUrls: ["./practice.component.scss"],
})
export class PracticeComponent implements OnInit {
  constructor(private nbMenuService: NbMenuService) {}

  ngOnInit(): void {
    this.nbMenuService
      .onItemClick()
      .subscribe((title) => this.alert());
  }
  alert(){
   console.log("ERROR");
   
  }

  items = [{ title: "block" }];
}
