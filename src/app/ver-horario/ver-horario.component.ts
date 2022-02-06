import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-ver-horario',
  templateUrl: './ver-horario.component.html',
  styleUrls: ['./ver-horario.component.css']
})
export class VerHorarioComponent implements OnInit {
  horarioForm: FormGroup;
  constructor(private fb: FormBuilder,private router:Router) { 
    this.horarioForm = this.fb.group({
      horario_tabla: ['',Validators.required],
    })

  }

  ngOnInit(): void {
  }

  ruta() {
    this.router.navigate(['/horario/']); 
  }


}
