import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {
  constructor(private dataService: DataService) {}
  ngOnInit() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-74.12, 4.65],
      zoom: 9,
      accessToken: environment.mapboxToken,
    });
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
  }
}
