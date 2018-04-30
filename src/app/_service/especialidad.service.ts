import { HttpClient } from '@angular/common/http';
import { HOST } from './../_shared/var.constant';
import { Injectable, Host } from '@angular/core';
import { Especialidad } from '../_model/especialidad';

@Injectable()
export class EspecialidadService {

  url: string = `${HOST}/especialidad`;

  constructor(private http: HttpClient) { }

  getListarEspecialidad(){
    return this.http.get<Especialidad[]>(`${this.url}/listar`);
  }
}
