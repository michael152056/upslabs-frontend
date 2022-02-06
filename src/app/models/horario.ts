export class Horario{
    static forEach(arg0: (data: any) => void) {
      throw new Error('Method not implemented.');
    }
    _id?: number;
    correo: string;
    nombres: string;
    reserva: string;
    cargo: string;
    carrera: string;
    nivel: string;
    materia: string;
    cantidad_estudiantes: string;
    fecha: string;
    hora: string;
    actividades: string;
    tipo_reserva: string;
    cedula: string;
    estado: string;

    constructor(correo:string,nombres: string,reserva: string,cargo: string,carrera: string,nivel: string, materia: string, cantidad_estudiantes: string, fecha: string, hora: string, actividades: string,tipo_reserva: string,cedula: string,estado: string){
        this.correo = correo;
        this.nombres = nombres;
        this.reserva =  reserva;
        this.cargo = cargo;
        this.carrera = carrera;
        this.nivel = nivel;
        this.materia = materia;
        this.cantidad_estudiantes = cantidad_estudiantes;
        this.fecha = fecha;
        this.hora = hora;
        this.actividades = actividades;
        this.tipo_reserva = tipo_reserva;
        this.cedula = cedula;
        this.estado = estado;
    }
}