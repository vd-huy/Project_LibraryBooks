import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListlibrarysComponent } from '../listlibrarys/listlibrarys.component';
import { AddlibraryComponent } from '../addlibrary/addlibrary.component';
import { AddLibWithBookComponent } from '../add-lib-with-book/add-lib-with-book.component';

const routes : Routes = [
  {path: "", component: ListlibrarysComponent},
  {path: "addlib", component: AddlibraryComponent},
  {path: "addlibwithbooks", component: AddLibWithBookComponent}
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
