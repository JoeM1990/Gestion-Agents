import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { }


    login(username:any, password:any){
      if(username=='Francis' && password=='000000'){
        localStorage.setItem('token','true');
        this.router.navigate(['/dashboard']);
        
      }else{
        alert('Erreur de connexion');
      }
    }
  
    checkLogin(){
      return !! localStorage.getItem('token');
    }


    logout(){
      localStorage.removeItem('token')
      this.router.navigate(['/login']);
    }

}
