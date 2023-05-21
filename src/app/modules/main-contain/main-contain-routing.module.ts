import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminLayoutComponent } from 'src/app/layouts/pages/admin-layout/admin-layout.component';
import { AddIssueComponent } from './pages/add-issue/add-issue.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent,
    children: [
      {path: '', component: HomePageComponent},
      {path: 'add-issue', component: AddIssueComponent},
    ]
  },
  { path: '**', redirectTo: 'admin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContainModuleRoutingModule { }
