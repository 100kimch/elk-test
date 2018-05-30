import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-homp1',
  templateUrl: './homp1.component.html',
  styleUrls: ['./homp1.component.css']
})
export class Homp1Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {

    const locations = [{
      lat: 37.5689897,
      lng: 127.0349552
    },
    {
      lat: 37.5688291,
      lng: 127.0146846
    },
    {
      lat: 37.5688291,
      lng: 127.0146846
    },
    {
      lat: 37.5597419,
      lng: 126.959714
    },
    {
      lat: 37.581271,
      lng: 127.0146846
    },
    {
      lat: 37.581271,
      lng: 126.959714
    },
    {
      lat: 37.5688291,
      lng: 126.959714
    },
    ];

    this.initMap(locations);

  }

  initMap(locations) {
    const google = window['google'];

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16.6,
      center: {
        lat: 37.5528696,
        lng: 127.010658
      }
    });

    // Create an array of alphabetical characters used to label the markers.
    const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map(function (location, i) {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
      });
    });

    // Add a marker clusterer to manage the markers.
    const markerCluster = new window['MarkerClusterer'](map, markers, {
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
  }

}
