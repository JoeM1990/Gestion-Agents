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
    return this.httpclient.get<Users[]>('https://fakeapi-wqoi.onrender.com/userst');
  }

  createUsers(users:Users){
    return this.httpclient.post('https://fakeapi-wqoi.onrender.com/userst', users);
  }

  getUserById(id:any){
    return this.httpclient.get('https://fakeapi-wqoi.onrender.com/userst/'+id);
  }


  updateUser(id:any, users:Users){
    return this.httpclient.put('https://fakeapi-wqoi.onrender.com/userst/'+id, users);
  }

  deleteUser(id:any){
    return this.httpclient.delete('https://fakeapi-wqoi.onrender.com/userst/'+id);
  }

  getAllIndividus(){
    return this.httpclient.get<Individus[]>('https://fakeapi-wqoi.onrender.com/individust');
  }

  createIndividus(individus:Individus){
    return this.httpclient.post('https://fakeapi-wqoi.onrender.com/individust', individus);
  }

  getIndividusById(id:any){
    return this.httpclient.get('https://fakeapi-wqoi.onrender.com/individust/'+id);
  }


  updateIndividu(id:any, individus:Individus){
    return this.httpclient.put('https://fakeapi-wqoi.onrender.com/individust/'+id, individus);
  }

  deleteIndividu(id:any){
    return this.httpclient.delete('https://fakeapi-wqoi.onrender.com/individust/'+id);
  }

  getAllCasiers(){
    return this.httpclient.get<Casiers[]>('https://fakeapi-wqoi.onrender.com/casierst');
  }

  createCasiers(casiers:Casiers){
    return this.httpclient.post('https://fakeapi-wqoi.onrender.com/casierst', casiers);
  }

  getCasiersById(id:any){
    return this.httpclient.get('https://fakeapi-wqoi.onrender.com/casierst/'+id);
  }


  updateCasiers(id:any, casiers:Casiers){
    return this.httpclient.put('https://fakeapi-wqoi.onrender.com/casierst/'+id, casiers);
  }

  deleteCasiers(id:any){
    return this.httpclient.delete('https://fakeapi-wqoi.onrender.com/casierst/'+id);
  }

  chercheCasier(text:any){
    return this.httpclient.get('https://fakeapi-wqoi.onrender.com/casierst?noms_like='+text);
  }
  
}
