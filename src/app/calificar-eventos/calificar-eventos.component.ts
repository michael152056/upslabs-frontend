import { Component, OnInit } from '@angular/core';
import { Correo } from '../models/correo';
import { Evento } from '../models/evento';
import { CorreoService } from '../services/correo.service';
import { EventoService } from '../services/evento.service';


@Component({
  selector: 'app-calificar-eventos',
  templateUrl: './calificar-eventos.component.html',
  styleUrls: ['./calificar-eventos.component.css']
})
export class CalificarEventosComponent implements OnInit {
  listEventos: Evento[] = [];
  constructor(private _eventoService: EventoService, public correoService: CorreoService) { }

  ngOnInit(): void {
    this.obtenerEventos();
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

  register() {
    const correo: Correo= {
      asunto: 'PRUEBAASDAS',
      email: 'mroblesl@est.ups.edu.ec',
      mensaje: 'PRUEBADASD'
    }
    return this.correoService.sendEmail(correo);


  }




}
