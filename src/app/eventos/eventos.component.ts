import { Component, OnInit, ViewChild } from '@angular/core';
import { Evento } from '../models/evento';
import { EventoService } from '../services/evento.service';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  listEventos: Evento[] = [];
  campaignOne: FormGroup;
  campaignTwo: FormGroup;

/*   dataSource = new MatTableDataSource(this.listEventos); */
/*   @ViewChild(MatPaginator) paginator: MatPaginator; */
  constructor(private _eventoService: EventoService) { 
    const today = new Date();
    const day = today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });
   
    
    console.log(this.fechainicio)
    console.log(today.getDay())
  }
  
  Consejo:any;
  isShown: boolean;
  filterPost = '';
  fechaPost ='';
  tipoPost ='';
  fechainicio=''  
  fechafin='';
  dia =  24;
  mes= 'MAY';

  

  ngOnInit(): void {
    this.obtenerEventos();
    console.log(this.obtenerFecha());
    this.isShown = true;

/*     this.dataSource.paginator = this.paginator; */
  }
   _tipos:any = {
    tipo:""  ,
    combo:""
  };

  obtenerFecha(){
    
    return this.fechainicio.toString();
  }
  
  obtenerEventos(){
    this._eventoService.getEventos().subscribe(data => {
      console.log(data);
      this.listEventos = data;
    }, error =>{
      console.log(error);
    }
   )
  }

  valorTotal(){
    return this.listEventos.length
  }

  toggleShow() {
    this.isShown = ! this.isShown;
  }

  onSearch() {
    console.log(this.campaignOne.controls['start'].value);
 }

 onSearch2() {
  console.log(this.campaignOne.controls['start'].value);
}

}