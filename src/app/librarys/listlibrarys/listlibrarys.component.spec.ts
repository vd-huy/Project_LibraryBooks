import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlibrarysComponent } from './listlibrarys.component';

describe('ListlibrarysComponent', () => {
  let component: ListlibrarysComponent;
  let fixture: ComponentFixture<ListlibrarysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListlibrarysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListlibrarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
