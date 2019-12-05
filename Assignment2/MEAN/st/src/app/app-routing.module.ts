import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StAddComponent } from './st-add/st-add.component';
import { StGetComponent } from './st-get/st-get.component';


const routes: Routes = [
  {
    path:"insert",
    component:StAddComponent
  },
  {
    path:"",
    component:StGetComponent,
    pathMatch:"full"
  },
  {
    path:"create/:id",
    component:StAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
