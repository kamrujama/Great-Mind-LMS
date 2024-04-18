import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Route, Router, ActivatedRoute, IsActiveMatchOptions } from '@angular/router';
import { NavbarService } from '../../services/header/navbar.service';
import { CourseCardComponent } from '../reusable/cards/course-card/course-card.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isNavMenusOpen:boolean = false;
  isMobileNavOpen:boolean = false;
  isSubMenuOpened = false;
  selectedDomain = 'IT Domains';
  logoPath = '';

  megaMenuObject = [
    {
      "title": "Computer Science",
      "subdomains": [
        { "courseName": "Full Stack Web Development" },
        { "courseName": "Android App Development" },
        { "courseName": "Artificial Intelligence" },
        { "courseName": "Machine Learning" },
        { "courseName": "Data Science" },
        { "courseName": "Cyber Security" },
        { "courseName": "UI/UX Design" },
        { "courseName": "Blockchain for Developer" },
      ],
      "icon": "fa fa-laptop",
      "isExpanded": true
    },
    {
      "title": "Electrical/Electronics",
      "subdomains": [
        { "courseName": "Iot and Robotics" },
        { "courseName": "Cloud Computing" },
        { "courseName": "Embedded System" },
      ],
      "icon": "fa fa-laptop",
      "isExpanded": false
    },
    {
      "title": "Management",
      "subdomains": [
        { "courseName": "Fashion Design" },
        { "courseName": "Digital Marketing" },
        { "courseName": "Finance" },
        { "courseName": "Human Resource" },
        { "courseName": "Stock Marketing" },
        { "courseName": "Graphic Design" },
      ],
      "icon": "fa fa-laptop",
      "isExpanded": false
    },
    {
      "title": "Mechanical",
      "subdomains": [
        { "courseName": "Hybrid & Electric Vehicle" },
        { "courseName": "Auto Cad" },
        { "courseName": "Construction Planning" }
      ],
      "icon": "fa fa-laptop",
      "isExpanded": false
    },
    {
      "title": "Medical",
      "subdomains": [
        { "courseName": "Nano technology/Genetic Engineering" },
        { "courseName": "Psychology" }
      ],
      "icon": "fa fa-laptop",
      "isExpanded": false
    }
  ]

  computerScienceSubdomains = [
    { "courseName": "Full Stack Web Development" },
    { "courseName": "Android App Development" },
    { "courseName": "Artificial Intelligence" },
    { "courseName": "Machine Learning" },
    { "courseName": "Data Science" },
    { "courseName": "Cyber Security" },
    { "courseName": "UI/UX Design" },
    { "courseName": "Blockchain for Developer" },
  ]
  electronicsSubdomains = [
    { "courseName": "Iot and Robotics" },
    { "courseName": "Cloud Computing" },
    { "courseName": "Embedded System" },
  ]
  managementSubdomains = [
    { "courseName": "Fashion Design" },
    { "courseName": "Digital Marketing" },
    { "courseName": "Finance" },
    { "courseName": "Human Resource" },
    { "courseName": "Stock Marketing" },
    { "courseName": "Graphic Design" },
  ]
  mechanicalSubdomains = [
    { "courseName": "Hybrid & Electric Vehicle" },
    { "courseName": "Auto Cad" },
    { "courseName": "Construction Planning" }
  ]

  medicalSubdomains = [
    { "courseName": "Nano technology/Genetic Engineering" },
    { "courseName": "Psychology" }
  ]

  constructor(private route: ActivatedRoute, private router: Router, private navbarService: NavbarService) {}
  ngOnInit() {
    this.logoPath = this.navbarService.getLogoPath();
  }

  getRouterLink(link:string):string {
    return link.replace(' ', '').toLowerCase();
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
    window.scrollTo(0, 0);
  }

  isLinkActive(path:string) {
    return this.router.isActive(path, false) && this.router.url === path;
  }

  toggleProgramSubmenu(title:string) {
    this.megaMenuObject.forEach((domain) => {
      if(domain.title === title) {
        domain.isExpanded = true;
      } else {
        domain.isExpanded = false;
      }
    })
  }
}
