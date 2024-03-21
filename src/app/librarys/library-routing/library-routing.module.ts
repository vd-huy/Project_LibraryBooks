import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ListlibrarysComponent } from '../listlibrarys/listlibrarys.component';
import { AddlibraryComponent } from '../addlibrary/addlibrary.component';

const routes : Routes = [
  {path: "", component: ListlibrarysComponent},
  {path: "addlib", component: AddlibraryComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LibraryRoutingModule { }
