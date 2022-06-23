import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicle: Vehicle = {

    id:1,
    name: 'Car'
  } ;

  constructor() { }

  ngOnInit(): void {
  }

}
