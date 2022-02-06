import { Component, OnInit } from '@angular/core';
import { Noticia } from '../models/noticia';
import { NoticiaService } from '../services/noticia.service';

import { Evento } from '../models/evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listNoticias: Noticia[] = [];
  listEventos: Evento[] = [];

  constructor(private _noticiaService: NoticiaService,private _eventoService: EventoService) { }


  ngOnInit(): void {
    this.obtenerNoticias();
    this.obtenerEventos();
  }


  obtenerNoticias(){
    this._noticiaService.getNoticias().subscribe(data => {
      console.log(data);
      this.listNoticias = data;
    }, error =>{
      console.log(error);
    }
   )
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


}
