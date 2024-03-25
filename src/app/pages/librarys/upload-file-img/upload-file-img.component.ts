import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { firstValueFrom, retry } from 'rxjs';
import { BooksService } from '../../../../services/books/books.service';

@Component({
  selector: 'app-upload-file-img',
  templateUrl: './upload-file-img.component.html',
  styleUrl: './upload-file-img.component.scss'
})
export class UploadFileImgComponent {

  pictureForm! : FormGroup;

  pictureFormArr! : FormArray;

  pictureFile! : File;

  urlArray : string []=[];

  isUpload : boolean = false;

  @Output() urdSend = new EventEmitter<string[]>()




  constructor(private booksService : BooksService,private fb : FormBuilder){
    this.pictureForm = this.fb.group({
      pictures : this.fb.array([this.createNewFormPicture()])
    })
    this.pictureFormArr = this.pictureForm.get("pictures") as FormArray;
  }

  createNewFormPicture() : FormGroup{
    return  this.fb.group ({
      pictureFile : new FormControl(""),
      folder : new FormControl("")
    })
  }

  addNewFormPicture(){
    if (this.pictureForm.get("pictures")?.value || this.pictureForm.get("folder")?.value) {
      alert("vui lòng điền đủ thông tin")
    }else{

      this.pictureFormArr.push(this.createNewFormPicture());
    }

  }

  removeFormPicture(index : number){
    this.pictureFormArr.removeAt(index)
  }


  // Upload file img 
  onFileSelect(event:any) {
    this.pictureFile =  event.target.files[0];
  }

    onUploadFile() {
      this.pictureFormArr.controls.forEach(form =>{
        this.getUrlsPicture();
    })
    
  }

    async getUrlsPicture() {
      const formData = new FormData();
      formData.append('picture', this.pictureFile);
      formData.append("folder", this.pictureForm.get("folder")?.value)
  
      const url = await firstValueFrom(this.booksService.getUrlPicture(formData));
      this.isUpload = true;
      this.urlArray.push(url);
    }

    sendUrl(){
      this.urdSend.emit(this.urlArray);
    }

  
}
