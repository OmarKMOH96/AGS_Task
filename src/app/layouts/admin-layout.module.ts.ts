import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { MainContainModule } from '../modules/main-contain/main-contain.module';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AdminLayoutComponent,
  ],
  imports: [
    CommonModule,
    MainContainModule,
    MatTooltipModule,
    NgxSpinnerModule
  ],
  providers:[

  ]
})
export class AdminLayoutModule { }
