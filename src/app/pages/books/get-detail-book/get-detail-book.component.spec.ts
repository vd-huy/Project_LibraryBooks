import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailBookComponent } from './get-detail-book.component';

describe('GetDetailBookComponent', () => {
  let component: GetDetailBookComponent;
  let fixture: ComponentFixture<GetDetailBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetDetailBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDetailBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
