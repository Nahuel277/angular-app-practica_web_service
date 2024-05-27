import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { YoutubeService } from '../../../core/service/youtube.service';
import { YouTubeResponse, YouTubeResult } from '../../../core/models/resultYoutube';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css'
})
export class YoutubeComponent implements OnInit {
  
  text: string = '';
  videos: YouTubeResult[] = [];
  errorMessage: string = '';

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    this.youtubeService.getVideo(this.text).subscribe(
      (data: YouTubeResponse) => {
        if (data && data.results) {
          this.videos = data.results;
          console.log(this.videos);
        } else {
          this.errorMessage = 'Respuesta inesperada del servidor';
          console.log(this.errorMessage);
        }
      },
      (error) => {
        this.errorMessage = error;
        console.log(error);
      }
    );
  }
}
