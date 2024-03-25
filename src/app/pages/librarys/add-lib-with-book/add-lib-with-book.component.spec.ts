import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLibWithBookComponent } from './add-lib-with-book.component';

describe('AddLibWithBookComponent', () => {
  let component: AddLibWithBookComponent;
  let fixture: ComponentFixture<AddLibWithBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLibWithBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLibWithBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
