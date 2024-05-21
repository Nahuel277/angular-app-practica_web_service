import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '../../../core/service/translate.service';
import { error } from 'console';

@Component({
  selector: 'app-punto-a',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto-a.component.html',
  styleUrl: './punto-a.component.css'
})
export class PuntoAComponent implements OnInit{

  languages: any[] = [];
  sourceText: string = '';
  text: string = '';
  textTraducido: string = '';
  targetText: string = '';
  targetLanguage: string = '';

  constructor(private translateService: TranslateService){ }

  ngOnInit(): void {
  }

  getLanguages(): void {
    this.translateService.getLanguajes().subscribe(
      (response) => {
        this.languages = response.data.languages;
        console.log(this.languages);
      }
    );
  }

  detectLanguage(): void {
    if(this.sourceText.trim()) {
      this.translateService.detectText(this.sourceText).subscribe(
        (response) => {
          this.detectLanguage = response.data.detections[0][0].language;
        }
      );
    }
  }

  translate(): void {
    this.translateService.translateText(this.text, this.sourceText, this.targetText).subscribe(
      (response: any) => {
        console.log(response.data.translations[0].translatedText);
        this.textTraducido = response.data.translations[0].translatedText;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
