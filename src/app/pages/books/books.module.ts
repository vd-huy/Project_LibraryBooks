import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetBooksByLibComponent } from './get-books-by-lib/get-books-by-lib.component';
import {BooksRoutingModule} from "./books-routing/books-routing.module"

import { NzImageModule } from 'ng-zorro-antd/image';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { GetDetailBookComponent } from './get-detail-book/get-detail-book.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    GetBooksByLibComponent,
    GetDetailBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    NzImageModule,
    NzPageHeaderModule,
    NzGridModule,
    NzPaginationModule,
    NzSkeletonModule,
    NzModalModule,
    NzCarouselModule,
    NzIconModule
  ]
})
export class BooksModule { }
