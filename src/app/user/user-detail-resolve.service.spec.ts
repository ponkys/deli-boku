/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserDetailResolveService } from './user-detail-resolve.service';

describe('Service: UserDetailResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailResolveService]
    });
  });

  it('should ...', inject([UserDetailResolveService], (service: UserDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});
