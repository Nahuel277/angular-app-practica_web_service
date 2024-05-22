import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarMakerService } from '../../../core/service/car-maker.service';

@Component({
  selector: 'app-punto-c',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './punto-c.component.html',
  styleUrl: './punto-c.component.css'
})
export class PuntoCComponent implements OnInit {

  marcas: Array<any> = [];
  marcasId: string[] = ['104683', '91352', '75795', '108548', '105439', '106327', '78965',
    '102180', '72318', '79470', '71469', '134237', '72541', '128418'
  ];
  id: string = '';
  modelos: any[] = [];
  showResults: boolean = true;

  constructor(private carMakerService: CarMakerService) {
  }
  ngOnInit(): void {
    if(this.showResults) {
      this.marcasAutos();
    }
  }

  marcasAutos() {
    this.carMakerService.getMakes().subscribe(
      (data: any) => {
        this.marcas = data.filter((marca: any) => this.marcasId.includes(marca.id));
        console.log(this.marcas);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  modelosMarcasId(id: string) {
    this.carMakerService.getModelsByMakeId(id).subscribe(
      (data: any) => {
        this.modelos = data;
        console.log(this.modelos);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  setMarcaId(id: string) {
    this.id = id;
    this.modelosMarcasId(id);
  }
}
