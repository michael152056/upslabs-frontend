import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import {Correo} from '../models/correo'

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  url = 'http://localhost:4000/api/correo/'

    constructor(private http: HttpClient) {
   }

   sendEmail(_correo: Correo):Observable<any>{
     console.log(this.url)
    return this.http.post(this.url,_correo);

  }


}