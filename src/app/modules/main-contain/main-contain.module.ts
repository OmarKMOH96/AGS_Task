import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainContainModuleRoutingModule } from './main-contain-routing.module';
import { AddIssueComponent } from './pages/add-issue/add-issue.component';
import { MaterialModule } from 'src/app/material.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { IssuePipe } from '../filters/issue.pipe';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    HomePageComponent,
    AddIssueComponent,
    IssuePipe
  ],
  imports: [
    CommonModule,
    MainContainModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgxFileDropModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  exports: [
    CommonModule,
    MainContainModuleRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFileDropModule
  ],
  providers: [
    DatePipe
  ]
})
export class MainContainModule { }
