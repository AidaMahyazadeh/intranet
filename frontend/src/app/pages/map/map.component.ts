import { Component, Input, OnInit, inject } from '@angular/core';
import * as Leaflet from 'leaflet';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{ 
 toastre = inject(ToastrService)
  

  ngOnInit(){
    if(!navigator.geolocation){
      this.toastre.warning('Location is not supported.')
    }
    navigator.geolocation.getCurrentPosition(this.success)
  }

  success(position:any){
   const coords = position.coords;
   const {longitude,latitude} =coords;
   const myMap = Leaflet.map('map').setView([latitude,longitude],13)
   console.log(latitude,longitude)
   Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 19
  }).addTo(myMap);
   const marker = Leaflet.marker([latitude,longitude]).addTo(myMap);
   marker.bindPopup(`You are here`).openPopup();
  }
 }

