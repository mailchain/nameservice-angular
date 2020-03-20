import { TestBed } from '@angular/core/testing';

import { NameserviceAngularService } from './nameservice-angular.service';

describe('NameserviceAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NameserviceAngularService = TestBed.get(NameserviceAngularService);
    expect(service).toBeTruthy();
  });
});
