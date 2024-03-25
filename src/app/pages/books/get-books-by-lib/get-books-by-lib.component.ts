import { BooksService } from './../../../../services/books/books.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../../interfaces/book';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-get-books-by-lib',
  templateUrl: './get-books-by-lib.component.html',
  styleUrl: './get-books-by-lib.component.scss'
})
export class GetBooksByLibComponent implements OnInit {

  idLib! : number ;
  listBooks : Book[]=[];
  bookDetail! : Book;
  totalPage : number = 0;
  pageCurrent : number = 1;
  isLoading : boolean = true;

  // modal detail
  isVisible = false;
  

  
  constructor(private router : ActivatedRoute, private booksService : BooksService){}

    ngOnInit() {
    this.router.params.subscribe(params => {
      this.idLib = +params['idlib'];

     this.booksService.getBooksById(this.idLib, this.pageCurrent - 1 , 8).subscribe(data => 
      {
        this.listBooks = data.books;
        this.totalPage = data.totalPage * 10;
        this.isLoading = false;
      })
     
  })}

  setVisible(visible : boolean){
      this.isVisible = visible;
  }

  async onPageIndexChange(event : number){
    this.pageCurrent = event;
    this.isLoading = true;
    const data = await firstValueFrom(this.booksService.getBooksById(this.idLib, this.pageCurrent - 1 , 8));
    this.listBooks = data.books;
    this.totalPage = data.totalPage * 10;
    this.isLoading = false
  }

  showDetailBook(idBook : number){
      this.isVisible = true;
      this.bookDetail = this.listBooks.filter(item => item.id === idBook)[0];
  }








}
