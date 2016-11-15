/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserDetailResolve } from './user-detail-resolve.service';

describe('Service: UserDetailResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailResolve]
    });
  });

  it('should ...', inject([UserDetailResolve], (service: UserDetailResolve) => {
    expect(service).toBeTruthy();
  }));
});
