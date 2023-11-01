import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { FileUpload } from 'src/app/models/file-upload';
import { Individus } from 'src/app/models/individus';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GServeService } from 'src/app/services/crud/g-serve.service';

@Component({
  selector: 'app-gs-individus',
  templateUrl: './gs-individus.component.html',
  styleUrls: ['./gs-individus.component.css']
})

export class GsIndividusComponent  implements OnInit{

  selectedFiles!: FileList;
  currentFileUpload!: FileUpload;

  individus:any;
  individusGet:any;

  public individusForm: FormGroup;
  public updateindividusForm: FormGroup;

  idUser:any;

  base64Image!: string;

  base64Output!: string;
  imagePath:any;

  constructor(private service:GServeService, public formBuilder: FormBuilder, 
    public router: Router, private _sanitizer: DomSanitizer) {
      this.individusForm = this.formBuilder.group({
        id:null,
        nom: ['', [Validators.required], ],
        postnom: ['', [Validators.required],],
        prenom: ['', Validators.required],
        sexe: ['', Validators.required],
        lieu: ['', Validators.required],
        date: ['', Validators.required],
        etat: ['', Validators.required],
        nation: ['', Validators.required],
        adresse: ['', Validators.required],
        telephone: ['', Validators.required],
        photo: this.base64Output,
      });
  
      this.updateindividusForm = this.formBuilder.group({
        nom: ['', [Validators.required], ],
        postnom: ['', [Validators.required],],
        prenom: ['', Validators.required],
        sexe: ['', Validators.required],
        lieu: ['', Validators.required],
        date: ['', Validators.required],
        etat: ['', Validators.required],
        nation: ['', Validators.required],
        adresse: ['', Validators.required],
        telephone: ['', Validators.required],
        photo: this.base64Output,
      });
     }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.service.getAllIndividus().subscribe((data)=>{
      this.individus = data  
      // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
      // + .base64string);
    }
    );
  }

  addData(){

    if(confirm('Voules-vous ajouter cette information')){

     
    this.service.createIndividus(this.individusForm.value).subscribe({
      next:(data)=>{
        this.loadData();
      }
    });
    }

  }

  getId(id:any){
    this.service.getIndividusById(id).subscribe((data)=>{

      this.individusGet = data;
      this.idUser = this.individusGet.id;

      this.updateindividusForm = this.formBuilder.group({
        nom: this.individusGet.nom,
        postnom: this.individusGet.postnom,
        prenom: this.individusGet.prenom,
        sexe: this.individusGet.sexe,
        lieu: this.individusGet.lieu,
        date: this.individusGet.date,
        etat: this.individusGet.etat,
        nation: this.individusGet.nation,
        adresse: this.individusGet.adresse,
        telephone: this.individusGet.telephone,
        photo: this.base64Output,
      });

      
    });
  }

  updateData(){
    if(confirm('Voules-vous modifier cette information')){

      this.updateindividusForm.controls['photo'].setValue(this.base64Output);

      this.service.updateIndividu(this.idUser, this.updateindividusForm.value).subscribe({
        next:(data)=>{
          this.loadData();
        }
      });
      }
  }

  deleteData(id:any){
    if(confirm('Voules-vous supprimer cette information')){

      this.service.deleteIndividu(id).subscribe({
        next:(data)=>{
          this.loadData();
        }
      });
      }
  }

  // onFileSelected(event: any): void {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = this.handleReaderLoaded.bind(this);
  //     reader.readAsBinaryString(file);
  //   }
  // }

  // handleReaderLoaded(e: any): void {
  //   this.base64Image = 'data:image/png;base64,' + btoa(e.target.result);
  // }


  onFileSelected(event:any) {
    this.convertFile(event.target.files[0]).subscribe((base64: string) => {
      this.base64Output = base64;
      
    });

    //alert(this.base64Output);
    // this.individusForm.controls['photo'].setValue(this.base64Output);
    this.individusForm.controls['photo'].setValue(this.base64Output);
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event:any) => result.next(btoa(event.target.result.toString()));
    return result;
  }

}
