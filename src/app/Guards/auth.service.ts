import { Injectable } from '@angular/core';
import { UrlSegmentGroup, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAdmin: boolean = false; 

  isAdminEnabled(): Promise<boolean> {
    // return of(true, new UrlTree(new UrlSegmentGroup())); // for Testing
    return Promise.resolve(this.isAdmin);
  }
}
