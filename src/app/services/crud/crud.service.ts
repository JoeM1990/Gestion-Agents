import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from 'express';
import { finalize } from 'rxjs';
import { Casiers } from 'src/app/models/casiers';
import { FileUpload } from 'src/app/models/file-upload';
import { Individus } from 'src/app/models/individus';
import { Users } from 'src/app/models/users';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private basePath = '/upload';


  constructor(private angularFirestore: AngularFirestore,private storage: AngularFireStorage,
    private db: AngularFireDatabase, public router:Router) { }


    getAllUsers(){
      return this.angularFirestore.collection('gs-users')
      .snapshotChanges();
    }
  
    addUsers(users: Users){
  
      this.angularFirestore.collection('gs-users')
        .ref
        .where('username','==', users.username)
        .get().then(res=>{
  
          if(res.empty){
  
             new Promise<any>((resolve, reject) => {
              this.angularFirestore.collection('gs-users')
              .add(users)
              .then(response => {
                alert('Success');
               }, error => {
                reject(error)
                alert('Echec d enregistrement');
               }
               
               )
              ;
              })
            
          }else{
            alert(users.username+ ' existe déjà')
          }
        }).catch(err=>{
  
        })
  
      } 

    deleteUsers(users: { id: string | undefined; }){
    
        this.angularFirestore.collection('gs-users')
        .doc(users.id)
        .delete().then(response=>{
         alert('Success');
        });
      }
    
    updateUsers(id:string, users:Users){
    
        this.angularFirestore.collection('gs-users').doc(id).update(users).then(response=>{
         alert('Success');
        });
      }
    
    getUsersById(name:any){
        return this.angularFirestore.collection('gs-users')
          .ref
          .where('username','==',name)
          .get();
      }


      getAllCasiers(){
        return this.angularFirestore.collection('gs-casiers')
        .snapshotChanges();
      }
    
      addCasiers(casiers: Casiers){
    
        new Promise<any>((resolve, reject) => {
          this.angularFirestore.collection('gs-casiers')
          .add(casiers)
          .then(response => {
            alert('Success');
           }, error => {
            reject(error)
            alert('Echec d enregistrement');
           }
           
           )
          ;
          })
    
        } 
  
      deleteCasiers(casiers: { id: string | undefined; }){
      
          this.angularFirestore.collection('gs-casiers')
          .doc(casiers.id)
          .delete().then(response=>{
           alert('Success');
          });
        }
      
      updateCasiers(id:string, casiers:Casiers){
      
          this.angularFirestore.collection('gs-casiers').doc(id).update(casiers).then(response=>{
           alert('Success');
          });
        }
      
      getCasiersById(name:any, postnom:any, prenom:any){
          return this.angularFirestore.collection('gs-casiers')
            .ref
            .where('noms','==',name+' '+postnom+' '+prenom)
            .get();
        }


        getAllIndividus(){
          return this.angularFirestore.collection('gs-individus')
          .snapshotChanges();
        }
      
        addIndividus(individus: Individus){

          this.angularFirestore.collection('gs-individus')
          .ref
          .where('nom','==', individus.nom)
          .where('postnom','==', individus.postnom)
          .where('prenom','==', individus.prenom)
          .get().then(res=>{
    
            if(res.empty){
    
               new Promise<any>((resolve, reject) => {
                this.angularFirestore.collection('gs-individus')
                .add(individus)
                .then(response => {
                  alert('Success');
                 }, error => {
                  reject(error)
                  alert('Echec d enregistrement');
                 }
                 
                 )
                ;
                })
              
            }else{
              alert(individus.nom+' '+individus.postnom+' '+individus.prenom+ ' existe déjà')
            }
          }).catch(err=>{
    
          })
          
        } 
    
        deleteIndividus(individus: { id: string | undefined; }){
        
            this.angularFirestore.collection('gs-individus')
            .doc(individus.id)
            .delete().then(response=>{
             alert('Success');
            });
          }
        
        updateIndividus(id:string, individus:Individus){
        
            this.angularFirestore.collection('gs-individus').doc(id).update(individus).then(response=>{
             alert('Success');
            });
          }
        
        getIndividusById(name:any, postnom:any, prenom:any){
            return this.angularFirestore.collection('gs-casiers')
              .ref
              .where('nom','==',name)
              .where('postnom','==',postnom)
              .where('prenom','==',prenom)
              .get();
          }


          addPhoto(fileUpload: FileUpload, individus:Individus){
            const filePath = `${this.basePath}/${fileUpload.file.name}`;
            const storageRef = this.storage.ref(filePath);
            const uploadTask = this.storage.upload(filePath, fileUpload.file);
        
            uploadTask.snapshotChanges().pipe(
              finalize(() => {
              storageRef.getDownloadURL().subscribe(downloadURL => {
              fileUpload.url = downloadURL;
              fileUpload.name = fileUpload.file.name;
        
              individus.photo=downloadURL;
        
              this.addIndividus(individus);
            
              });
                })
              ).subscribe();
            
          }

}
