import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateService } from '../../../core/service/translate.service';
import { error } from 'node:console';

@Component({
  selector: 'app-punto-a',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './punto-a.component.html',
  styleUrl: './punto-a.component.css'
})
export class PuntoAComponent implements OnInit{

  texto: string = '';
  source: string = '';
  target: string = '';
  textoTraducido: string = '';

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {
  }

  traducirTexto(): void {
    this.translateService.translateText(this.texto, this.target, this.source).subscribe(
      (result: any) => {
        this.textoTraducido = result.data.translations[0].translatedText;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
