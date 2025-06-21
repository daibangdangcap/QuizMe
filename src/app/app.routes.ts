import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OwnerComponent } from './pages/owner/owner.component';

export const routes: Routes = [
  { path: 'player', component: HomeComponent },
  { path: 'owner', component: OwnerComponent}
];
