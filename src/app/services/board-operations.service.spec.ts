import { TestBed } from '@angular/core/testing';

import { BoardOperationsService } from './board-operations.service';

describe('BoardOperationsService', () => {
  let service: BoardOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
