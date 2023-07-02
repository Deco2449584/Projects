<<<<<<< HEAD
mapboxgl.accessToken =
  "pk.eyJ1IjoiaW5nanVhbm1hc3VhcmV6IiwiYSI6ImNsZDZjMXJpYTFhdzgzdnBhZXdkczQxcnQifQ.25y1PWrOTW12YssZ73JQtA";

const mapa = new mapboxgl.Map({
  container: "contenedor-del-mapa",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [-74.12, 4.65],
  zoom: 10,
  /* attributionControl: false, // Deshabilita el control de atribución */
});
mapa.addControl(new mapboxgl.NavigationControl());

mapa.on("load", () => {
  mapa.loadImage("./img/map-bus-stop.png", function (error, image) {
    if (error) throw error;

    mapa.addImage("custom-icon", image);

    mapa.addSource("puntosDeInteres", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              coordinates: [-74.10966159424332, 4.691148644459972],
              type: "Point",
            },
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              coordinates: [-74.10966159424332, 4.59602699923056],
              type: "Point",
            },
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              coordinates: [-74.03024860019572, 4.739745959795826],
              type: "Point",
            },
          },
        ],
      },
    });

    mapa.addLayer({
      id: "puntosDeInteres",
      type: "symbol",
      source: "puntosDeInteres",
      layout: {
        "icon-image": "custom-icon",
        "icon-size": 0.5,
        "icon-allow-overlap": true,
      },
    });
  });
});
=======
mapboxgl.accessToken =
  "pk.eyJ1IjoiaW5nanVhbm1hc3VhcmV6IiwiYSI6ImNsZDZjMXJpYTFhdzgzdnBhZXdkczQxcnQifQ.25y1PWrOTW12YssZ73JQtA";

const mapa = new mapboxgl.Map({
  container: "contenedor-del-mapa",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [-74.12, 4.65],
  zoom: 10,
  /* attributionControl: false, // Deshabilita el control de atribución */
});
mapa.addControl(new mapboxgl.NavigationControl());

mapa.on("load", () => {
  mapa.loadImage("./img/map-bus-stop.png", function (error, image) {
    if (error) throw error;

    mapa.addImage("custom-icon", image);

    mapa.addSource("puntosDeInteres", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              coordinates: [-74.10966159424332, 4.691148644459972],
              type: "Point",
            },
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              coordinates: [-74.10966159424332, 4.59602699923056],
              type: "Point",
            },
          },
          {
            type: "Feature",
            properties: {},
            geometry: {
              coordinates: [-74.03024860019572, 4.739745959795826],
              type: "Point",
            },
          },
        ],
      },
    });

    mapa.addLayer({
      id: "puntosDeInteres",
      type: "symbol",
      source: "puntosDeInteres",
      layout: {
        "icon-image": "custom-icon",
        "icon-size": 0.5,
        "icon-allow-overlap": true,
      },
    });
  });
});
>>>>>>> cb05dbdd33a42da23777a911500815823d888435
