import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { YoutubeService } from '../../../core/service/youtube.service';
import { error } from 'node:console';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css'
})
export class YoutubeComponent implements OnInit {
  
  text!: string;
  videos!: Array<any>;

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
  }

  search() {
    this.youtubeService.getVideo(this.text).subscribe(
      (data) => {
        console.log(data);
        this.videos = data.results;
      },
      (error) => {
        console.log(error);
      }
    )
  };
}
