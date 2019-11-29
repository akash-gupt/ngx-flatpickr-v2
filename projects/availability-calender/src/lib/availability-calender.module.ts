import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AvailabilityCalenderComponent } from "./availability-calender.component";

@NgModule({
  declarations: [AvailabilityCalenderComponent],
  imports: [CommonModule],
  exports: [AvailabilityCalenderComponent]
})
export class AvailabilityCalenderModule {}
