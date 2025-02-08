import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', component: PortfolioComponent }, // Home
  { path: 'portfolio', component: PortfolioComponent },
  // Aggiungi altre rotte qui
];
