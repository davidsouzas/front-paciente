var estadoscoordenadas = {
  AC: {coord: [-8.77, -70.55], count: 0}
, AL: {coord: [-9.62, -36.82], count: 0}
, AM: {coord: [-3.47, -65.10], count: 0}
, AP: {coord: [1.41, -51.77], count: 0}
, BA: {coord:	[-13.29, -41.71], count: 0}
, CE: {coord: [-5.20, -39.53], count: 0}
, DF: {coord:	[-15.83, -47.86], count: 0}
, ES: {coord:	[-19.19, -40.34], count: 0}
, GO: {coord:	[-15.98, -49.86], count: 0}
, MA: {coord: [-5.42, -45.44], count: 0}
, MT: {coord:	[-12.64, -55.42], count: 0}
, MS: {coord:	[-20.51, -54.54], count: 0}
, MG: {coord:	[-18.10, -44.38], count: 0}
, PA: {coord: [-3.79, -52.48], count: 0}
, PB: {coord: [-7.28, -36.72], count: 0}
, PR: {coord:	[-24.89, -51.55], count: 0}
, PE: {coord: [-8.38, -37.86], count: 0}
, PI: {coord: [-6.60, -42.28], count: 0}
, RJ: {coord:	[-22.25, -42.66], count: 0}
, RN: {coord: [-5.81, -36.59], count: 0}
, RO: {coord:	[-10.83, -63.34], count: 0}
, RS: {coord:	[-30.17, -53.50], count: 0}
, RR: {coord: [1.99, -61.33], count: 0}
, SC: {coord:	[-27.45, -50.95], count: 0}
, SE: {coord:	[-10.57, -37.45], count: 0}
, SP: {coord:	[-22.19, -48.79], count: 0}
, TO: {coord: [-9.46, -48.26], count: 0}
}

var map = L.map('map').setView([-13.449201, -51.013679], 4.45);

/*L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);*/

var Stamen_Terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
}).addTo(map);

L.tileLayer.wms("http://sistemas.gt4w.com.br/geoserver/processo_seletivo/wms", {
  layers: 'processo_seletivo:ufs_brasil',
  format: 'image/png',
  transparent: true
}).addTo(map);

apiGet("patients").then(function(response){
  response.forEach(function(p){
    estadoscoordenadas[p.uf].count++
  })
  Object.keys(estadoscoordenadas).forEach(function(k){
    var estado = estadoscoordenadas[k]
    L.marker(estado.coord).addTo(map)
      .bindPopup(`${estado.count} Paciente Cadastrados`);
  })
})

