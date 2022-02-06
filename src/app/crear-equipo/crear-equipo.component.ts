import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Equipo } from '../models/equipo';
import { EquipoService } from '../services/equipo.service';
import { Registrado } from '../models/registrado';
import { RegistradoService } from '../services/registrado.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {
  equipoForm: FormGroup;
  titulo = 'Añadir Equipo';
  id: string | null;
  listRegistrado: Registrado[] = [];
  constructor(private fb: FormBuilder, private router:Router, private toastr: ToastrService,private _equipoService: EquipoService,private aRouter: ActivatedRoute,private _registradoService: RegistradoService) {
    this.equipoForm = this.fb.group({
      equipo: ['',Validators.required],
      modelo: ['',Validators.required],
      marca: ['',Validators.required],
      serie: ['',Validators.required],
      ubicacion: ['',Validators.required],
      estado: ['',Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
}
   agregarEquipo(){
     var aleatorio = (Math.random() * (99 - 0) + 0).toString();
    const EQUIPO: Equipo = {
      codigo: aleatorio.replace('.',""),
      equipo: this.equipoForm.get('equipo')?.value,
      modelo: this.equipoForm.get('modelo')?.value,
      marca: this.equipoForm.get('marca')?.value,
      serie: this.equipoForm.get('serie')?.value,
      ubicacion: this.equipoForm.get('ubicacion')?.value,
      estado: this.equipoForm.get('estado')?.value
    }
    if(this.id !==null){
      //editamos equipo
      this._equipoService.editarEquipo(this.id,EQUIPO).subscribe(data => {
        this.toastr.info('Equipo actualizado con éxito!', 'Equipo actualizado!');
        this.router.navigate(['/crudEquipos']);
      }, error => {
        console.log(error);
        this.equipoForm.reset();
      })
  
    }else{
      //agregamos
      console.log(EQUIPO);
      this._equipoService.guardarEquipo(EQUIPO).subscribe(data => {
        this.toastr.success('Equipo registrado con éxito!', 'Equipo registrado!');
        this.router.navigate(['/crudEquipos']);
      }, error => {
        console.log(error);
        this.equipoForm.reset();
      })
  
    }
  }
 
  esEditar(){
    if(this.id !=null){
      this.titulo = 'Editar equipo';
      this._equipoService.obtenerEquipo(this.id).subscribe(data =>{
        this.equipoForm.setValue({
          equipo: data.equipo,
          modelo: data.modelo,
          marca: data.marca,
          serie: data.serie,
          ubicacion: data.ubicacion,
          estado: data.estado
        })
      }) 
    }
  }


  }
