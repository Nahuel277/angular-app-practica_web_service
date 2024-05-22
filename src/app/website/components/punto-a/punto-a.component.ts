import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
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

  translateForm: FormGroup;
  translatedText: string = '';
  languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'it', name: 'Italian' },
    { code: 'es', name: 'Spanish' }
  ];

  constructor(private fb: FormBuilder, private translateService: TranslateService) {
    this.translateForm = this.fb.group({
      text: [''],
      sourceLanguage: ['auto'],
      targetLanguage: ['en']
    });
  }

  ngOnInit(): void { }

  onTranslate() {
    const formValue = this.translateForm.value;
    this.translateService.translateText(formValue.text, formValue.targetLanguage, formValue.sourceLanguage).subscribe(response => {
      this.translatedText = response.data.translations[0].translatedText;
    }, error => {
      console.error('Error durante la traducción:', error);
      this.translatedText = 'La traducción falló. Inténtalo de nuevo.';
    });
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.translatedText).then(() => {
      console.log('Texto copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar al portapapeles', err);
    });
  }
}
