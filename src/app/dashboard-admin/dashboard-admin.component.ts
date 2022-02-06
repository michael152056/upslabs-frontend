import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Registrado } from '../models/registrado';
import { RegistradoService } from '../services/registrado.service';
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  opciones = [
    { titulo : 'Actualizar datos', info2: 'Edita la información personal de tu cuenta, ubicación , celular y clave', imagen: '../../assets/op1.png', color: 'rgb(219,246,253)' ,enlace: '/actDatos/'+localStorage.getItem('email')},
    { titulo : 'Listado de reservas', info2: 'Visualiza todas las reservas para un Laboratorio o Equipo de los usuarios', imagen: '../../assets/open-book.png', color: 'rgb(233,231,253)' , enlace: '/crudHorarios'},
    { titulo : 'Administrar Usuarios', info2: 'Añade, actualiza y elimina cuentas de usuario', imagen: '../../assets/op6.png', color: 'rgb(254,228,203)', enlace: '/crudUsuarios' },
    { titulo : 'Administrar Noticias', info2: 'Añade, actualiza y elimina noticias destacadas', imagen: '../../assets/op7.png', color: 'rgb(213,222,255)' ,enlace: '/crudNoticias'},
    { titulo : 'Administrar Eventos',info2: 'Añade, actualiza y elimina eventos', imagen: '../../assets/op2.png', color: 'rgb(200,247,220)', enlace: '/crudEventos' },
    { titulo : 'Administrar Equipos',info2: 'Añade, actualiza y elimina equipos', imagen: '../../assets/op5.png', color: 'rgb(121,135,167,.5)', enlace: '/crudEquipos' }
  ];
  constructor() { }

  ngOnInit(): void {

  }




}
