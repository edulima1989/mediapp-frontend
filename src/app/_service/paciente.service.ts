import { HOST } from './../_shared/var.constant';
import { Paciente } from './../_model/paciente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PacienteService {

  url: string = `${HOST}/paciente`;
  //pacientes: Paciente[] = [];

  constructor(private http: HttpClient) {    
    /*let p = new Paciente();
    p.idPaciente = 1;
    p.nombres = "Mito";
    p.apellidos = "Code";
    this.pacientes.push(p);

    p = new Paciente();
    p.idPaciente = 2;
    p.nombres = "Jaime";
    p.apellidos = "Medina";
    this.pacientes.push(p);*/
  }
  
  getlistarPaciente(){
    //return this.pacientes;
   //Observable
    return this.http.get<Paciente[]>(`${this.url}/listar`);
  }
}
