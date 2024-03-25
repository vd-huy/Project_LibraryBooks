import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../../../services/books/books.service';

@Component({
  selector: 'app-add-lib-with-book',
  templateUrl: './add-lib-with-book.component.html',
  styleUrl: './add-lib-with-book.component.scss'
})
export class AddLibWithBookComponent{
    addLibraryWithBook! : FormGroup;
  
    bookGroup! : FormGroup;

    receivedUrl : string[] = []

    

    constructor(private fb : FormBuilder, private booksService : BooksService){
      this.addLibraryWithBook = new FormGroup({
        name : new FormControl(''),
        address : new FormControl(""),
        existedBookIds : new FormArray([
          new FormGroup({
            bookId : new FormControl("")
          })
        ]),
        newBooks : this.fb.array([])
      })

      
    }

    // nhan url picture from server
    receiveData(data: string[]) {
      this.receivedUrl = data;
      console.log(this.receivedUrl);
      
    }

    get newBooks ():FormArray{
        return this.addLibraryWithBook.controls["newBooks"] as FormArray
    }

    newFormBook() : FormGroup{
      return this.fb.group({
        isbn : this.fb.control("",[Validators.required, Validators.minLength(10), Validators.maxLength(13)]),
          name : this.fb.control("", Validators.required),
          dateOfPublic : this.fb.control("", Validators.required),
          numPageOfBook : this.fb.control("", Validators.required),
          authorNames :this.fb.array([]),
          categoryNames : this.fb.array([]),
          libraryId: this.fb.control("")
      })
    }

    addBook(){
      this.newBooks.push(this.newFormBook)
    }    

    

    onSubmit(){}
}
