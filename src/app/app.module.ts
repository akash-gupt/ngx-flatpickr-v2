import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AvailabilityCalenderModule } from "projects/availability-calender/src/public-api";
import { NgxFlatpickrV2Module } from "projects/ngx-flatpickr-v2/src/public-api";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AvailabilityCalenderModule,
    NgxFlatpickrV2Module,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
