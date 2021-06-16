import { TestBed } from '@angular/core/testing';

import { AngularPeerJsCallService } from './angular-peer-js-call.service';

describe('AngularPeerJsCallService', () => {
  let service: AngularPeerJsCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularPeerJsCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
