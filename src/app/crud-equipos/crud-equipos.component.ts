import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Equipo } from '../models/equipo';
import { EquipoService } from '../services/equipo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Registrado } from '../models/registrado';
import { RegistradoService } from '../services/registrado.service';

import { PdfMakeWrapper, Txt ,Table ,ITable,Img} from "pdfmake-wrapper";

@Component({
  selector: 'app-crud-equipos',
  templateUrl: './crud-equipos.component.html',
  styleUrls: ['./crud-equipos.component.css']
})
export class CrudEquiposComponent implements OnInit {
  listEquipos: Equipo[] = [];
  id: string | null;
  listRegistrado: Registrado[] = [];

  constructor(private toastr: ToastrService,private _equipoService: EquipoService,private _registradoService: RegistradoService,private aRouter: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.aRouter.snapshot.paramMap.get('correo');
    this.obtenerEquipos();
  }
  obtenerEquipos(){
    this._equipoService.getEquipos().subscribe(data => {
      console.log(data);
      this.listEquipos = data;
    }, error =>{
      console.log(error);
    }
   )
  }

  eliminarEquipo(id: any){
    this._equipoService.eliminarEquipos(id).subscribe(data => {
      this.toastr.error("El equipo fue eliminado con exito", "Equipo Eliminado")
      this.obtenerEquipos();
    },error =>{
      console.log(error);
    })
  }

  ruta(id:any){
      this.router.navigate(['/editar-equipo/' + id]);
  }




  async generatePDF(){
    var datos = `
    Usuario: ` + localStorage.getItem('nombre') +`
    Fecha y hora: ` + this.getFecha() +`
    Reporte: Listado de equipos
    ` ;

    
    const pdf = new PdfMakeWrapper();
    
    pdf.pageOrientation('landscape');
    pdf.add( await new Img('assets/brand_logo.png').height(50).width(150).build() );

    pdf.add
    (
      new Txt(datos).bold().italics().end
    )

 

    pdf.add(
      new Table([
        ['Código','Equipo','Modelo','Marca','Serie','Ubicación','Estado'] 
    ]).widths([100,100,100,100,100,100,100]).layout({
      fillColor: (rowIndex: number, node: any, columnIndex: number) =>{
        return rowIndex ===0 ? '#CCCCCC' : '';
      }
    }).end
    );

   
    for (let i = 0; i < this.listEquipos.length; i++) {
      pdf.add(
        new Table([
          [ this.listEquipos[i].codigo,this.listEquipos[i].equipo,this.listEquipos[i].modelo,this.listEquipos[i].marca,this.listEquipos[i].serie,this.listEquipos[i].ubicacion,this.listEquipos[i].estado]
      ]).widths([100,100,100,100,100,100,100]).end
      );
      
    }
      
    pdf.create().open();

  
}

getFecha(){
  const MESES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const f = new Date();
  var date = f.getDay() + ' '  + MESES[f.getMonth()] + ' ' + f.getFullYear() + ' | ' + f.getHours() + ':' +f.getMinutes() + ':' + f.getSeconds(); 
return date.toString();
}


}
