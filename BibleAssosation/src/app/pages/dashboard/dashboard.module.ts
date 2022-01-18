import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DahsboardComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
