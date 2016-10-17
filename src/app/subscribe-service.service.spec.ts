/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubscribeServiceService } from './subscribe-service.service';

describe('Service: SubscribeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscribeServiceService]
    });
  });

  it('should ...', inject([SubscribeServiceService], (service: SubscribeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
