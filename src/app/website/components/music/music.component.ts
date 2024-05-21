import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Music } from '../../../core/models/music';
import { MusicService } from '../../../core/service/music.service';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent implements OnInit{

  listMusic!: Array<any>;
  music!: Music;
  text!: string;
  audioProgress: number[] = [];
  showResults: boolean = false;
  arrayId: string [] = ['60977514', '24276241', '553193312'];
  track!: Array<any>

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.getTrack();
  }

  updateAudioTime(audioPlayer: HTMLAudioElement, index: number) {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    this.audioProgress[index] = isNaN(progress) ? 0 : progress;
  }

  toggleAudioPlayback(audioPlayer: HTMLAudioElement, index: number) {
    if(audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }

  getTrack() {
    this.track = [];
    for(let i = 0; i < this.arrayId.length; i++){
      this.musicService.getTrack(this.arrayId[i]).subscribe(
        (result: any) => {
          this.track.push(result);
        }
      );
    }
    console.log(this,this.track);
  }

  searchMusic(){
    this.showResults = false;
    this.audioProgress = [];
    this.musicService.getMusic(this.text).subscribe((result:any)=>{
      this.listMusic = result.data;
      console.log(this.listMusic);
      this.showResults = true;
    })
  }
}
