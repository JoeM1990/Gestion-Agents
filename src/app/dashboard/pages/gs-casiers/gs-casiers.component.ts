import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Individus } from 'src/app/models/individus';
import { GServeService } from 'src/app/services/crud/g-serve.service';

@Component({
  selector: 'app-gs-casiers',
  templateUrl: './gs-casiers.component.html',
  styleUrls: ['./gs-casiers.component.css']
})
export class GsCasiersComponent implements OnInit {

  casiers:any;
  casiersGet:any;
  individus:Individus[]=[];

  public casiersForm: FormGroup;
  public updatecasiersForm: FormGroup;

  idUser:any;
  noms:any;

  constructor(private service:GServeService, public formBuilder: FormBuilder, 
    public router: Router) {
      this.casiersForm = this.formBuilder.group({
        id:null,
        noms: ['', [Validators.required], ],
        motif: ['', [Validators.required], ],
        officier: ['', [Validators.required], ],
        date: ['', [Validators.required], ],
      });
  
      this.updatecasiersForm = this.formBuilder.group({
        noms: ['', [Validators.required], ],
        motif: ['', [Validators.required], ],
        officier: ['', [Validators.required], ],
        date: ['', [Validators.required], ],
      });
     }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.service.getAllCasiers().subscribe((data)=>{
      this.casiers = data  ;
    }
    );

    this.service.getAllIndividus().subscribe((dataT)=>{
      this.individus = dataT;
    }
    );

   
  }

  addData(){

    if(confirm('Voules-vous ajouter cette information')){

    this.service.createCasiers(this.casiersForm.value).subscribe({
      next:(data)=>{
        this.loadData();
      }
    });
    }

  }

  getId(id:any){
    this.service.getCasiersById(id).subscribe((data)=>{

      this.casiersGet = data;
      this.idUser = this.casiersGet.id;

      this.updatecasiersForm= this.formBuilder.group({
        noms: this.casiersGet.noms,
        motif: this.casiersGet.motif,
        officier: this.casiersGet.officier,
        date: this.casiersGet.date,
      });

      
    });
  }

  updateData(){
    if(confirm('Voules-vous modifier cette information')){

      this.service.updateCasiers(this.idUser, this.updatecasiersForm.value).subscribe({
        next:(data)=>{
          this.loadData();
        }
      });
      }
  }

  deleteData(id:any){
    if(confirm('Voules-vous supprimer cette information')){

      this.service.deleteCasiers(id).subscribe({
        next:(data)=>{
          this.loadData();
        }
      });
      }
  }


}
