import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-networking1',
  templateUrl: './networking1.component.html',
  styleUrls: ['./networking1.component.css']
})
export class Networking1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  recargar(url:string){
    window.open(url, '_blank');
  }
  

}
