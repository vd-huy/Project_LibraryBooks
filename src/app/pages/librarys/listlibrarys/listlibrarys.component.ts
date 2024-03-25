import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { Library, LibraryByID } from '../../../../interfaces/library';
import { LibrarysService } from '../../../../services/librarys/librarys.service';

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

  //search By country
  searchCountry : string = "null";
  listCountry : string[] =[];
  nameSearch : string = "";
  filterResult : LibraryByID[] ;


  constructor(private librarysService : LibrarysService,private formBuilder : FormBuilder, private message: NzMessageService, private router : Router){
      this.librarysService.getLibrarys().subscribe(res=>{
       this.libraryData = res
      })   
      
      this.libGroup = this.formBuilder.group({
        name : ["",[Validators.required]],
        address : ["",[Validators.required]]
    })

    // dua ra cac address khac nhau
    this.listCountry = Array.from(new Set(this.libraryData.map(lib => lib.address)))

    //search 
    this.filterResult =  [...this.libraryData];
  }

  // view Detail Library
  showDetail (id :number) {
    this.router.navigate(["/listbooks", id])
  }

  handleSearch(){
    
    if (!this.nameSearch.trim().toLowerCase()) {
       if (this.searchCountry === "null") {
        this.libraryData = this.filterResult;
       }else {
        this.libraryData = this.filterResult.filter((item)=> item.address === this.searchCountry);
       }
    }else {
      if (this.searchCountry === "null") {
        this.libraryData = this.filterResult.filter((item)=> item.name.trim().toLowerCase().includes(this.nameSearch.trim().toLowerCase()));
       }else {
        this.libraryData = this.filterResult.filter((item)=> item.address === this.searchCountry && item.name.trim().toLowerCase().includes(this.nameSearch.trim().toLowerCase()));
       }
    }
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
      this.listCountry = Array.from(new Set(this.libraryData.map(lib => lib.address)));
      this.searchCountry = "null";
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
        this.libraryData = res;
        this.listCountry = Array.from(new Set(this.libraryData.map(lib => lib.address)));
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
