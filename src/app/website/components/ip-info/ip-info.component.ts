import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IpInfoService } from '../../../core/service/ip-info.service';
import { error } from 'console';
import { IpInfo } from '../../../core/models/ip-info';
import { CoordinateService } from '../../../core/service/coordinate.service';
import { ResultsDirection } from '../../../core/models/resultDirection';

@Component({
  selector: 'app-ip-info',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ip-info.component.html',
  styleUrl: './ip-info.component.css'
})
export class IpInfoComponent {

  ipInfo: string = '';
  infoList: IpInfo[] = [];
  showView: boolean = false;
  directioResult: ResultsDirection[] = []; 

  constructor(private ipInfoService: IpInfoService,
    private coordinateService: CoordinateService
  ) { }

  enviarIpInfo() {
    this.ipInfoService.setIpInformation(this.ipInfo).subscribe(
      (data) => {
        this.infoList = [data];
        console.log(this.infoList);
      },
      (error) => {
        console.log(error);
      }
    );
    this.showView = true;
  }

  obtenerDireccion(lat: number, lng: number) {
    let latString = lat.toString();
    let lngString = lng.toString();
    this.coordinateService.getDitection(latString, lngString).subscribe(
      (data) => {
        this.directioResult = [data.Results[0]];
        console.log(this.directioResult);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
