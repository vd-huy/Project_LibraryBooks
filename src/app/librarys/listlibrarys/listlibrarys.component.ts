import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Library, LibraryByID } from './../../../interfaces/library';
import { LibrarysService } from './../../../services/librarys.service';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-listlibrarys',
  templateUrl: './listlibrarys.component.html',
  styleUrl: './listlibrarys.component.scss'
})
export class ListlibrarysComponent {

  libraryData :LibraryByID[] =[];
  data! : Library;
  dataById! : LibraryByID;
  isVisibleDelete : boolean = false;
  isVisibleUpdate : boolean = false;
  idLibrary : number = NaN;
  libGroup!: FormGroup;
  isLoading  :boolean=false;



  constructor(private librarysService : LibrarysService,private formBuilder : FormBuilder, private message: NzMessageService){
      this.librarysService.getLibrarys().subscribe(res=>{
       this.libraryData = res
      })   
      
      this.libGroup = this.formBuilder.group({
        name : ["",[Validators.required]],
        address : ["",[Validators.required]]
    })
  }

  customValidator(){

  }

    showModalDelete(id : number): void {
      this.isVisibleDelete = true;
      this.idLibrary=id;
    }

    async deleteLib(){
      this.isLoading = true;
     await firstValueFrom(this.librarysService.deleteLibrary(this.idLibrary));
     this.librarysService.getLibrarys().subscribe(res=>{
      this.libraryData = res;
      this.isLoading = false
      this.isVisibleDelete = false;
      this.message.info('Delete is Complete');
    })  
    
    }
  
    handleOkDelete(): void {
      this.deleteLib();
      
    }
  
    handleCancel(): void {
      this.isVisibleDelete = false;
      this.isVisibleUpdate = false;
    }

    showModalUpdate(id:number):void{
      this.isVisibleUpdate= true;
      this.idLibrary=id;
      this.dataById = this.libraryData.filter(item =>  item.id == this.idLibrary)[0];
      this.libGroup.get("name")?.setValue(this.dataById.name);
      this.libGroup.get("address")?.setValue(this.dataById.address);
      
    }

    async updateData (){
      this.isLoading = true;
       await firstValueFrom(this.librarysService.updateLibrary(this.idLibrary, this.data));
       this.librarysService.getLibrarys().subscribe(res=>{
        this.libraryData = res
        this.isLoading = false;
        this.message.info('Update is Complete');
       }) 


       this.isVisibleUpdate = false;
    }

    submitFormUpdate():void{
      this.data = {
        name : this.libGroup.get("name")?.value,
        address : this.libGroup.get("address")?.value
      }

      this.updateData();
    }

    

    
}
