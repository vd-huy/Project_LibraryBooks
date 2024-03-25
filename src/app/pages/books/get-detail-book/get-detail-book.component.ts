import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../../../interfaces/book';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-get-detail-book',
  templateUrl: './get-detail-book.component.html',
  styleUrl: './get-detail-book.component.scss'
})
export class GetDetailBookComponent {

  @Input() isVisible! : boolean;
  @Input() bookDetail! : Book;

  @Output() isVisibleChange;

  isOkLoading = false;

  effect = 'scrollx';

  constructor(){
    this.isVisibleChange = new EventEmitter<any>();
  }




  handleOk(): void {
    this.isOkLoading = true;
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
    console.log(this.bookDetail);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isVisibleChange.emit(this.isVisible);
  }
}
