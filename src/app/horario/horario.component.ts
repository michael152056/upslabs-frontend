import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Horario } from '../models/horario';
import { HorarioService } from '../services/horario.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Calendar } from '../models/calendar';
import esLocales from '@fullcalendar/core/locales/es';
import { Evento } from '../models/evento';
import { EventoService } from '../services/evento.service';

/* import esLocale from '@fullcalendar/core'; */

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css'],
})
export class HorarioComponent implements OnInit {
  public laboratorio: string | null;
  public listHorario: Horario[] = [];
  public listEventos: Evento[] = [];

  public prueba: string[] = [];
  public listEvents: Calendar[] = [];
  eve: any[];
  public events: any[];
  public options: any;

  constructor(
    private aRouter: ActivatedRoute,
    public _horarioService: HorarioService,
    public _eventoService: EventoService
  ) {
    this.laboratorio = this.aRouter.snapshot.paramMap.get('laboratorio');
  }

  ngOnInit(): void {
    this.obtenerHorarios();
    this.obtenerEventos();
  }

  obtenerHorarios() {
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      locale: esLocales,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
    };
    this._horarioService.getHorarios().subscribe((data) => {
      this.listHorario = data;
      for (let i = 0; i < this.listHorario.length; i++) {
        if (this.listHorario[i].estado == 'aprobado') {
          const CALENDAR: Calendar = {
            title:
              this.listHorario[i].reserva +
              '\n - ' +
              this.listHorario[i].nombres,
            start:
              this.listHorario[i].fecha +
              'T' +
              this.obtenerHoraInicio(this.listHorario[i].hora),
            end:
              this.listHorario[i].fecha +
              'T' +
              this.obtenerHoraFin(this.listHorario[i].hora),
            description: this.listHorario[i].actividades,
            backgroundColor: this.verificarTipo(
              this.listHorario[i].tipo_reserva
            ),
            borderColor: this.verificarTipo(this.listHorario[i].tipo_reserva),
          };

          this.listEvents.push(CALENDAR);
        }
      }
    });

    var fecha_final = '';

    this._eventoService.getEventos().subscribe((data) => {
      this.listEventos = data;
      for (let i = 0; i < this.listEventos.length; i++) {
        fecha_final =
          this.listEventos[i].ano_evento +
          '-' +
          this.obtenerMes(this.listEventos[i].mes_evento) +
          '-' +
          this.listEventos[i].dia_evento;
        console.log(fecha_final);
        const CALENDAR: Calendar = {
          title:
            this.listEventos[i].titulo_evento +
            '\n - ' +
            this.listEventos[i].ponente,
          start:
            fecha_final +
            'T' +
            this.obtenerHoraInicio(this.listEventos[i].hora),
          end:
            fecha_final + 'T' + this.obtenerHoraFin(this.listEventos[i].hora),
          description: this.listEventos[i].desc_evento,
          backgroundColor: 'rgb(52,196,113)',
          borderColor: 'rgb(52,196,113)',
        };

        this.listEvents.push(CALENDAR);
      }
    });
    console.log(this.listEvents);
  }

  obtenerMes(mes_fin: string) {
    const fecha = {
      mes: [
        'ENE',
        'FEB',
        'MAR',
        'ABR',
        'MAY',
        'JUN',
        'JUL',
        'AGO',
        'SEP',
        'OCT',
        'NOV',
        'DIC',
      ],
    };
    var mes_total = '';

    for (let j = 1; j < fecha.mes.length + 1; j++) {
      if (fecha.mes[j] === mes_fin) {
        if (j < 9) {
          mes_total = '0' + (j + 1).toString();
        } else {
          mes_total = (j + 1).toString();
        }
      }
    }
    return mes_total;
  }

  obtenerEventos() {}

  verificarTipo(tipo_reserva: string) {
    console.log(tipo_reserva);
    var colores = '';
    if (tipo_reserva == 'laboratorio') {
      colores = 'rgb(0,122,217)';
    } else {
      colores = 'rgb(255,148,46)';
    }
    return colores;
  }

  getLaboratorio() {
    return this.laboratorio;
  }

  obtenerDia(dateString: string) {
    var days = [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo',
    ];
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
    return dayName;
  }

  obtenerHoraInicio(hora: string) {
    const split = hora.split('-');
    const inicio = split[0].replace(/ /g, '');
    return inicio;
  }

  obtenerHoraFin(hora: string) {
    const split = hora.split('-');
    const fin = split[1].replace(/ /g, '');
    return fin;
  }

  /*  objetos_d(start:string){
   
    console.log(CALENDAR);
    this.listEvents.push(CALENDAR);
  } */
}
