import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-networking2',
  templateUrl: './networking2.component.html',
  styleUrls: ['./networking2.component.css']
})
export class Networking2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recargar(url:string){
    window.open(url, '_blank');
  }
  
}
