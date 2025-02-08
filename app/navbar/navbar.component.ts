import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Link della navbar
  navLinks = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/portfolio', label: 'Portfolio', icon: 'work' },
    { path: '/about', label: 'Chi Siamo', icon: 'info' },
    { path: '/contact', label: 'Contatti', icon: 'mail' }
  ];
}
