import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, PortfolioComponent],
  template: `
    <app-navbar></app-navbar>
    <app-portfolio></app-portfolio>
  `,
})
export class AppComponent {}
