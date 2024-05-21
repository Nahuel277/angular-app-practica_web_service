import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MusicComponent } from '../../../website/components/music/music.component';
import { PuntoBComponent } from '../../../website/components/punto-b/punto-b.component';
import { PuntoAComponent } from '../../../website/components/punto-a/punto-a.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MusicComponent, PuntoBComponent, PuntoAComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  title: string = 'Web Service';
}
