import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Link della navbar
  navLinks = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/beat-store', label: 'Beat Store', icon: 'library_music' },
    { path: '/portfolio', label: 'Portfolio', icon: 'work' },
    { path: '/contact', label: 'Contatti', icon: 'mail' }
  ];

  // Variabile per il menu mobile
  isMobileMenuOpen = false;

  // Funzione per aprire/chiudere il menu mobile
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
