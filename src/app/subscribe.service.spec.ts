/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubscribeService } from './subscribe.service';

describe('Service: SubscribeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscribeService]
    });
  });

  it('should ...', inject([SubscribeService], (service: SubscribeService) => {
    expect(service).toBeTruthy();
  }));
});
