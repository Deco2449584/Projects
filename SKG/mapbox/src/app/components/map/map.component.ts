import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../environments/environment';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  constructor(private dataService: DataService) {}

  ngAfterViewInit() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-74.12, 4.65],
      zoom: 9,
      attributionControl: false,
      accessToken: (mapboxgl as any).accessToken || environment.mapboxToken,
    });

    map.on('style.load', () => {
      map.addControl(new mapboxgl.NavigationControl());

      this.dataService.getDatosFromAPI().subscribe((data: any) => {
        // Procesar los datos recibidos y agregarlos al mapa
        if (data && data.features) {
          map.addSource('datos', {
            type: 'geojson',
            data: data,
          });

          map.addLayer({
            id: 'datos-layer',
            type: 'circle',
            source: 'datos',
            paint: {
              'circle-radius': 6,
              'circle-color': 'blue',
            },
          });
        }
      });
    });
  }

  ngOnInit() {
    // Código de inicialización adicional si es necesario
  }
}
