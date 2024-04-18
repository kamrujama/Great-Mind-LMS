import { Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { AboutUsComponent } from './components/common/about-us/about-us.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { CarrersComponent } from './components/common/carrers/carrers.component';
import { ContactComponent } from './components/common/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
  },
  {
    path: 'carrers',
    component: CarrersComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
