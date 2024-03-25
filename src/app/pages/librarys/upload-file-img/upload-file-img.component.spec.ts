import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileImgComponent } from './upload-file-img.component';

describe('UploadFileImgComponent', () => {
  let component: UploadFileImgComponent;
  let fixture: ComponentFixture<UploadFileImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadFileImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadFileImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
