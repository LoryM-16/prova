import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safe-url.pipe'; // Importa il pipe

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe], // Importa CommonModule e SafeUrlPipe
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // Dati per la bio
  bio = {
    title: 'Chi Siamo',
    description: 'Benvenuti nel nostro studio musicale, fondato nel 2010 da [Nome Fondatore]. Specializzati in produzione, registrazione e mixaggio, collaboriamo con artisti di diversi generi per creare suoni unici e memorabili. La nostra missione è trasformare le vostre idee in realtà musicali.'
  };

  // Dati per l'esperienza
  experience = {
    title: 'La Nostra Esperienza',
    description: 'Con oltre 10 anni di esperienza nel settore, abbiamo collaborato con artisti come [Nome Artista 1], [Nome Artista 2], e [Nome Artista 3]. Abbiamo partecipato a progetti che spaziano dal pop al rock, fino alla musica elettronica, garantendo sempre la massima qualità e soddisfazione.'
  };

  // Dati per i riferimenti Spotify
  spotifyTracks = [
    {
      title: 'Hit Estate 2023',
      embedUrl: 'https://open.spotify.com/embed/track/123456789?utm_source=generator'
    },
    {
      title: 'Rock Anthem',
      embedUrl: 'https://open.spotify.com/embed/track/987654321?utm_source=generator'
    }
  ];
}
