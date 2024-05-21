import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../../core/service/news.service';

@Component({
  selector: 'app-punto-b',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto-b.component.html',
  styleUrl: './punto-b.component.css'
})
export class PuntoBComponent {

  noticias: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

  getListaDeNoticias() {
    this.newsService.getNewsList().subscribe(
      (data) => {
        //console.log(data);
        this.noticias = data.homepageArticles[0].articles;
        //console.log(this.noticias);
      },
      (error) => {
        console.error(error);
      }
    )
  };
}
