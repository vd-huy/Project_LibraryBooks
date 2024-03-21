import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListlibrarysComponent } from './listlibrarys/listlibrarys.component';
import { LibraryRoutingModule } from './library-routing/library-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AddlibraryComponent } from './addlibrary/addlibrary.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSelectModule } from 'ng-zorro-antd/select';


@NgModule({
  declarations: [
    ListlibrarysComponent,
    AddlibraryComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    HttpClientModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzPageHeaderModule,
    NzGridModule,
    NzImageModule,
    NzSelectModule,

  ]
})
export class LibrarysModule { }
