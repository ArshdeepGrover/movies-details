import { Component, OnInit } from "@angular/core";
import { LabelType, Options } from "@angular-slider/ngx-slider";

@Component({
  selector: "app-practice",
  templateUrl: "./practice.component.html",
  styleUrls: ["./practice.component.scss"],
})
export class PracticeComponent implements OnInit {
  value: number = 70;
  highValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 5,
    showTicks: true,
    translate: (value: number, label: LabelType): string => {
      console.log(LabelType);
      
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
