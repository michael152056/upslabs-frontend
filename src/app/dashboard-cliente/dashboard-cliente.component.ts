import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent implements OnInit {
  opciones = [
    { titulo : 'Actualizar datos', info2: 'Edita la información personal de tu cuenta, ubicación , celular y clave', imagen: '../../assets/op1.png', color: 'rgb(219,246,253)' ,enlace: '/actDatosCliente/'+localStorage.getItem('email')},
    { titulo : 'Ver calendario', info2: 'Visualiza el horario de eventos, reservas de todos los laboratorios del bloque D', imagen: '../../assets/op2.png', color: 'rgb(233,231,253)' , enlace: '/horario'},
    { titulo : 'Calificar Eventos', info2: 'Califica todos los eventos, y danos tú opinión acerca de ellos', imagen: '../../assets/op3.png', color: 'rgb(254,228,203)', enlace: '/calificarEventos' },
    { titulo : 'Reservar laboratorio', info2: 'Reserva uno de nuestros laboratorios y utiliza sus equipos con todas las herramientas de software disponibles a tu disposición.', imagen: '../../assets/op4.png', color: 'rgb(213,222,255)' ,enlace: '/reservaLab'},
    { titulo : 'Reservar equipo',info2: 'Reserva uno de nuestros equipos disponibles o alguna herramienta adicional de hardware', imagen: '../../assets/op5.png', color: 'rgb(200,247,220)', enlace: '/reservaEquipo' }
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
