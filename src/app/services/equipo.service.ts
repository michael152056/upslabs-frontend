import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  url = 'http://localhost:4000/api/equipos/'
  constructor(private http: HttpClient) { }

  getEquipos(): Observable<any>{
    return this.http.get(this.url);
  }
  obtenerEquipo(id: string):Observable<any>{
    return this.http.get(this.url + id);
  }
  eliminarEquipos(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }
  guardarEquipo(equipo: Equipo):Observable<any>{
    return this.http.post(this.url,equipo);
  }

  editarEquipo(id:string,equipo: Equipo):Observable<any>{
      return this.http.put(this.url + id,equipo);
  }


}
