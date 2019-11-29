import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import "flatpickr";
import { NgxFlatpickrV2Component } from "./ngx-flatpickr-v2.component";

@NgModule({
  declarations: [NgxFlatpickrV2Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NgxFlatpickrV2Component]
})
export class NgxFlatpickrV2Module {}
