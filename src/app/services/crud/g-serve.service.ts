import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Casiers } from 'src/app/models/casiers';
import { Individus } from 'src/app/models/individus';
import { Users } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class GServeService {

  constructor( private httpclient: HttpClient) { }

  getAllUsers(){
    return this.httpclient.get<Users[]>('http://localhost:3000/userst');
  }

  createUsers(users:Users){
    return this.httpclient.post('http://localhost:3000/userst', users);
  }

  getUserById(id:any){
    return this.httpclient.get('http://localhost:3000/userst/'+id);
  }


  updateUser(id:any, users:Users){
    return this.httpclient.put('http://localhost:3000/userst/'+id, users);
  }

  deleteUser(id:any){
    return this.httpclient.delete('http://localhost:3000/userst/'+id);
  }

  getAllIndividus(){
    return this.httpclient.get<Individus[]>('http://localhost:3000/individust');
  }

  createIndividus(individus:Individus){
    return this.httpclient.post('http://localhost:3000/individust', individus);
  }

  getIndividusById(id:any){
    return this.httpclient.get('http://localhost:3000/individust/'+id);
  }


  updateIndividu(id:any, individus:Individus){
    return this.httpclient.put('http://localhost:3000/individust/'+id, individus);
  }

  deleteIndividu(id:any){
    return this.httpclient.delete('http://localhost:3000/individust/'+id);
  }

  getAllCasiers(){
    return this.httpclient.get<Casiers[]>('http://localhost:3000/casierst');
  }

  createCasiers(casiers:Casiers){
    return this.httpclient.post('http://localhost:3000/casierst', casiers);
  }

  getCasiersById(id:any){
    return this.httpclient.get('http://localhost:3000/casierst/'+id);
  }


  updateCasiers(id:any, casiers:Casiers){
    return this.httpclient.put('http://localhost:3000/casierst/'+id, casiers);
  }

  deleteCasiers(id:any){
    return this.httpclient.delete('http://localhost:3000/casierst/'+id);
  }

  chercheCasier(text:any){
    return this.httpclient.get('http://localhost:3000/casierst?noms_like='+text);
  }
  
}
