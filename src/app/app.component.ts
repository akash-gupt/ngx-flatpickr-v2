import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ngx-availability-calender";
  selectedDates = ["2019-11-22"];
  onDayCreate(e: any) {
    // const dayElem = e.dayElem;
    // if (moment(dayElem.dateObj).isSame(moment().add(1, "day"), "date")) {
    //   dayElem.classList.add("warning");
    // }
  }
}
