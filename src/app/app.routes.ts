import { Routes } from '@angular/router';
import { MusicComponent } from './website/components/music/music.component';
import { YoutubeComponent } from './website/components/youtube/youtube.component';
import { PuntoBComponent } from './website/components/punto-b/punto-b.component';
import { PuntoAComponent } from './website/components/punto-a/punto-a.component';
import { PuntoCComponent } from './website/components/punto-c/punto-c.component';

export const routes: Routes = [
    {path: 'music', component: MusicComponent},
    {path: 'youtube', component: YoutubeComponent},
    {path: 'noticias', component: PuntoBComponent},
    {path: 'traductor', component: PuntoAComponent},
    {path: 'marcas-autos', component: PuntoCComponent}
];
