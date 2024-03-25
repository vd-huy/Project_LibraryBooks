import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GetBooksByLibComponent } from '../get-books-by-lib/get-books-by-lib.component';

const routes : Routes = [
    {path: ":idlib" , component : GetBooksByLibComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class BooksRoutingModule { }
