import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('menusList') menusList: ElementRef | undefined;

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   if (!this.isNavMenusOpen) {
  //     return;
  //   }

  //   if (this.menusList && !this.menusList.nativeElement.contains(event.target)) {
  //     this.isNavMenusOpen = false;
  //   }
  // }

  isNavMenusOpen:boolean = false;
  isMobileNavOpen:boolean = false;
  isSubMenuOpened = false;
  selectedDomain = 'IT Domains';

  domains = [
    {
      'Domain': 'IT Domains',
      'Subdomains': ['Web Development', 'Artificial Intelligence', 'Cyber Security', 'Data Science', 'Android App Development', 'IOT & Robotics', 'Blockchain Developer', 'Cloud Computing', 'Auto CAD', 'Embeded System', 'Hybrid Electronic Vehicle', 'Graphic Design'],
      'isSubMenuOpened': false
    },
    {
      'Domain': 'Management Domain',
      'Subdomains': ['Human Resource(HR)', 'Digital Marketing', 'Finance', 'Stock Market'],
      'isSubMenuOpened': false
    },
    {
      'Domain': 'Medical',
      'Subdomains': ['Psychology', 'Genetic Engineering', 'Nanotechnology'],
      'isSubMenuOpened': false
    },
    {
      'Domain':'Fashion Design',
      'Subdomains':[],
      'isSubMenuOpened': false
    },
    {
      'Domain':'Drone Mechanics',
      'Subdomains':[],
      'isSubMenuOpened': false
    },
    {
      'Domain':'Business Analytics',
      'Subdomains':[],
      'isSubMenuOpened': false
    }
  ]

  navItems = [
    'Programs',
    'About Us',
    'Carrers',
    'LMS Login',
    'Contact Us'
  ]



  constructor(private elementRef: ElementRef) {}
  ngOnInit() {

  }

  outsideClick() {
    if (this.isNavMenusOpen) {
      this.isNavMenusOpen = false;
    }
  }
  togglePrograms() {
    this.isNavMenusOpen = !this.isNavMenusOpen;
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

 toggleSubMenu(item:any) {
   this.domains.forEach((domain:any) => {
     if (domain.Domain === item.Domain) {
       domain.isSubMenuOpened = !domain.isSubMenuOpened;
     } else {
       domain.isSubMenuOpened = false;
     }
   });
 }

 handleNavClick(item:any) {
   if (item === 'Programs') {
     this.togglePrograms();
   }
 }

}
