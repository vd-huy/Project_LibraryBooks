import { Library } from './../../../interfaces/library';
import { Component, Inject, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibrarysService } from '../../../services/librarys.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { firstValueFrom } from 'rxjs';



@Component({
  selector: 'app-addlibrary',
  templateUrl: './addlibrary.component.html',
  styleUrl: './addlibrary.component.scss'
})
export class AddlibraryComponent {

  libGroup!: FormGroup;
  isLoading : boolean = false

  constructor(private formBuilder : FormBuilder, private router : Router , private librarysService : LibrarysService, private message: NzMessageService){
    this.libGroup = this.formBuilder.group({
      name : ["",[Validators.required]],
      address : ["",[Validators.required]]
    })
  }

   async submitForm(){
    
    if (this.libGroup.invalid){
      this.message.info("Please check the fieldss")
    }else {
     const  library : Library = {
      name : this.libGroup.get("name")?.value,
      address : this.libGroup.get('address')?.value
     }
     this.isLoading = true;
     await firstValueFrom(this.librarysService.addLibrary(library)).then((res)=>{
       this.isLoading = false;
       this.message.info(res);
       this.libGroup.reset();
      })
    }
  }

  onBack():void {
    this.router.navigate(["/listlibrarys"])
  }

  
}
