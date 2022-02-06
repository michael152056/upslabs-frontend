import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Horario } from '../models/horario';
import { HorarioService } from '../services/horario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PdfMakeWrapper, Txt ,Table ,ITable,Img} from "pdfmake-wrapper";
import { TimeGridSlicer } from '@fullcalendar/timegrid';

type TableRow = [string,string,string,string,string,string,string,string,string,string,string,string,string,string];

@Component({
  selector: 'app-crud-horarios',
  templateUrl: './crud-horarios.component.html',
  styleUrls: ['./crud-horarios.component.css'],
})
export class CrudHorariosComponent implements OnInit {
  listHorarios: Horario[] = [];
  id: string | null;  
  public cedula = [];
  constructor(
    private toastr: ToastrService,
    private _horarioService: HorarioService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.aRouter.snapshot.paramMap.get('correo');
    this.obtenerHorarios();
  }
  obtenerHorarios() {
    this._horarioService.getHorarios().subscribe(
      (data) => {
        console.log(data);
        this.listHorarios = data;
        for (let i = 0; i < this.listHorarios.length; i++) {
          this.cedula.push[this.listHorarios[i].cedula];
          
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarHorario(id: any) {
    this._horarioService.eliminarHorarios(id).subscribe(
      (data) => {
        this.toastr.error(
          'La reserva ha sido eliminada con exito',
          'Reserva Eliminada'
        );
        this.obtenerHorarios();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modificar(id : any, estado: string){
    var es = "";
    if(estado == 'aprobado'){
      es = "rechazado";
    }
    if(estado == 'rechazado' || estado == "pendiente"){
      es = "aprobado";
    }
    this._horarioService.obtenerHorario(id).subscribe(
      (data) => {
        this.listHorarios = data;
        console.log(this.listHorarios)
        const HORARIO: Horario = {
          correo: data.correo,
          nombres: data.nombres,
          reserva: data.reserva,
          cargo: data.cargo,
          carrera: data.carrera,
          nivel: data.nivel,
          materia:data.materia,
          cantidad_estudiantes: data.cantidad_estudiantes,
          fecha: data.fecha,
          hora: data.hora,
          actividades: data.actividades,
          tipo_reserva: data.tipo_reserva,
          cedula: data.cedula,
          estado: es
        }

        this._horarioService.editarHorario(id,HORARIO).subscribe(data => {
          this.toastr.info('Reserva actualizada con éxito!', 'Reserva actualizada!');
          this.obtenerHorarios();
        })

      },
      (error) => {
        console.log(error);
      }
    );
  }

  ruta(id: any) {
    this.router.navigate(['/editar-horario/' + id]);
  }

  

  async generatePDF(){
    var datos = `
    Usuario: ` + localStorage.getItem('nombre') +`
    Fecha y hora: ` + this.getFecha() +`
    Reporte: Listado de reservas
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
        ['Cédula','Nombres','Correo','Materia','Actividades','Tipo','Reserva','Fecha','Hora','Personas','Estado'] 
    ]).widths([60,80,80,60,80,70,80,70,30,20,40]).layout({
      fillColor: (rowIndex: number, node: any, columnIndex: number) =>{
        return rowIndex ===0 ? '#CCCCCC' : '';
      }
    }).end
    );

   
    for (let i = 0; i < this.listHorarios.length; i++) {
      pdf.add(
        new Table([
          [ this.listHorarios[i].cedula,this.listHorarios[i].nombres,this.listHorarios[i].correo,this.listHorarios[i].materia,this.listHorarios[i].actividades,this.listHorarios[i].tipo_reserva,this.listHorarios[i].reserva,this.listHorarios[i].fecha,this.listHorarios[i].hora,this.listHorarios[i].cantidad_estudiantes,this.listHorarios[i].estado]
      ]).widths([60,80,80,60,80,70,80,70,30,20,40]).end
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
