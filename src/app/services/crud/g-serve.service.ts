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
    return this.httpclient.get<Users[]>('http://localhost:3000/users');
  }

  createUsers(users:Users){
    return this.httpclient.post('http://localhost:3000/users', users);
  }

  getUserById(id:any){
    return this.httpclient.get('http://localhost:3000/users/'+id);
  }


  updateUser(id:any, users:Users){
    return this.httpclient.put('http://localhost:3000/users/'+id, users);
  }

  deleteUser(id:any){
    return this.httpclient.delete('http://localhost:3000/users/'+id);
  }

  getAllIndividus(){
    return this.httpclient.get<Individus[]>('http://localhost:3000/individus');
  }

  createIndividus(individus:Individus){
    return this.httpclient.post('http://localhost:3000/individus', individus);
  }

  getIndividusById(id:any){
    return this.httpclient.get('http://localhost:3000/individus/'+id);
  }


  updateIndividu(id:any, individus:Individus){
    return this.httpclient.put('http://localhost:3000/individus/'+id, individus);
  }

  deleteIndividu(id:any){
    return this.httpclient.delete('http://localhost:3000/individus/'+id);
  }

  getAllCasiers(){
    return this.httpclient.get<Casiers[]>('http://localhost:3000/casiers');
  }

  createCasiers(casiers:Casiers){
    return this.httpclient.post('http://localhost:3000/casiers', casiers);
  }

  getCasiersById(id:any){
    return this.httpclient.get('http://localhost:3000/casiers/'+id);
  }


  updateCasiers(id:any, casiers:Casiers){
    return this.httpclient.put('http://localhost:3000/casiers/'+id, casiers);
  }

  deleteCasiers(id:any){
    return this.httpclient.delete('http://localhost:3000/casiers/'+id);
  }

  chercheCasier(text:any){
    return this.httpclient.get('http://localhost:3000/casiers?noms_like='+text);
  }
  
}
