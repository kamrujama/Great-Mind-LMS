import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  logoPath = '../../assets/images/logo.png';

  constructor() { }

  getLogoPath() {
    return this.logoPath;
  }
}
