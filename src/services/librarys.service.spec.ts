import { TestBed } from '@angular/core/testing';

import { LibrarysService } from './librarys.service';

describe('LibrarysService', () => {
  let service: LibrarysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrarysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
