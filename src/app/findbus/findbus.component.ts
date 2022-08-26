import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusserviceService } from '../busservice.service';
import { Ibus } from '../ibus';

@Component({
  selector: 'app-findbus',
  templateUrl: './findbus.component.html',
  styleUrls: ['./findbus.component.css'],
})
export class FindbusComponent implements OnInit {
  busdata: Ibus = {
    busId:0,
    busNo: '',
    rows: 0,
    cols: 0,
    dtime: '',
    atime: '',
    pickup: '',
    seatCost: 0,
    driverName: '',
    driverContact: 0,
    typeOfBus: '',
    source: '',
    destination: '',
    distance: 0,
  }
busId: number = 0
  constructor(private busservice:BusserviceService, private activateroute:ActivatedRoute) {}

  ngOnInit(): void {
    const tid = this.activateroute.snapshot.paramMap.get('busId')
 
    this.busId = Number(tid)
   
    this.busservice.getBus(this.busId).subscribe((data:Ibus)=>{this.busdata=data})
    console.log(this.busdata);
  }

}
