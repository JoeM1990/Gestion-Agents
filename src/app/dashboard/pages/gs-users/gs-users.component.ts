import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { GServeService } from 'src/app/services/crud/g-serve.service';

@Component({
  selector: 'app-gs-users',
  templateUrl: './gs-users.component.html',
  styleUrls: ['./gs-users.component.css']
})
export class GsUsersComponent implements OnInit {

  users:any;
  usersGet:any;

  public usersForm: FormGroup;
  public updateusersForm: FormGroup;

  idUser:any;

  constructor(private service:GServeService, public formBuilder: FormBuilder, 
    public router: Router) {
      this.usersForm = this.formBuilder.group({
        id:null,
        username: ['', [Validators.required], ],
        password: ['', [Validators.required],],
        role: ['', Validators.required],
        status: "Active",
      });

      this.updateusersForm = this.formBuilder.group({
        username: ['', [Validators.required], ],
        password: ['', [Validators.required],],
        role: ['', Validators.required],
        status: "Active",
      });
     }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.service.getAllUsers().subscribe((data)=>{
      this.users = data  
    }
    );
  }

  addData(){

    if(confirm('Voules-vous ajouter cette information')){

    this.service.createUsers(this.usersForm.value).subscribe({
      next:(data)=>{
        this.loadData();
      }
    });
    }

  }

  getId(id:any){
    this.service.getUserById(id).subscribe((data)=>{

      this.usersGet = data;
      this.idUser = this.usersGet.id;

      this.updateusersForm = this.formBuilder.group({
        username: this.usersGet.username,
        password: this.usersGet.password,
        role: this.usersGet.role,
        status: this.usersGet.status
      });
      
    });
  }

  updateData(){
    if(confirm('Voules-vous modifier cette information')){

      this.service.updateUser(this.idUser, this.updateusersForm.value).subscribe({
        next:(data)=>{
          this.loadData();
        }
      });
      }
  }

  deleteData(id:any){
    if(confirm('Voules-vous supprimer cette information')){

      this.service.deleteUser(id).subscribe({
        next:(data)=>{
          this.loadData();
        }
      });
      }
  }

  

}
