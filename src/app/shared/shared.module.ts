import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
// import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    // FormsModule,
    // HttpClientModule
  ],
  exports: [
    MatSlideToggleModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
