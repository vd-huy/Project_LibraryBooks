import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBooksByLibComponent } from './get-books-by-lib.component';

describe('GetBooksByLibComponent', () => {
  let component: GetBooksByLibComponent;
  let fixture: ComponentFixture<GetBooksByLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetBooksByLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetBooksByLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
