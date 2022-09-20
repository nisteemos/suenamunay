import { AfterViewInit, Component, OnInit } from '@angular/core';
//import { Observable, Subscriber } from 'rxjs'

import * as L from 'leaflet';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.sass']
})
export class MapasComponent implements AfterViewInit {
  map: any;
  constructor() {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  /*private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }*/

  private loadMap(): void {
    this.map = L.map("map").setView([0, 0], 1);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapbox.accessToken,
    }).addTo(this.map);
    this.map.flyTo([2.9128895423050007, -75.27787448877085], 4);
    const icon = L.icon({
      iconUrl: 'assets/images/marker-icon.png',
      shadowUrl: 'assets/images/marker-shadow.png'
    });
    const markerStaMa = L.marker([11.173717991902778, -74.19927350667126],{icon}).bindPopup('<p style="margin: 5px 0px">Santa Marta - Magdalena, Colombia</p><p style="margin: 5px 0px">Mz G casa 17 Concepción 5</p');
    const markerNeiva = L.marker([2.9128895423050007, -75.27787448877085],{icon}).bindPopup('<p style="margin: 5px 0px">Neiva - Huila, Colombia</p><p style="margin: 5px 0px">calle 15 A sur # 15-15</p>');
    const markerLimPe = L.marker([-12.123912711239157, -77.03582087517914],{icon}).bindPopup('<p style="margin: 5px 0px">Lima - Perú</p><p style="margin: 5px 0px">Calle Bolognesi 587, Miraflores</p>');
    const markerGuajira = L.marker([11.376306181327562, -72.23173103643069],{icon}).bindPopup('<p style="margin: 5px 0px">Maicao - La Guajira, Colombia</p><p style="margin: 5px 0px">Calle 9 # 4-29 Barrio Libertador</p>');
    markerStaMa.addTo(this.map);
    markerNeiva.addTo(this.map);
    markerLimPe.addTo(this.map);
    markerGuajira.addTo(this.map);
    /*this.getCurrentPosition()
      .subscribe((position: any) => {
        this.map.flyTo([position.latitude, position.longitude], 13);
        const marker = L.marker([position.latitude, position.longitude]).bindPopup('Sede Neiva');
        marker.addTo(this.map);
      });*/
  }
}