import { TestBed } from '@angular/core/testing';

import { BlockchainServiceService } from './blockchain-service.service';

describe('BlockchainServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockchainServiceService = TestBed.get(BlockchainServiceService);
    expect(service).toBeTruthy();
  });
});
