import { Component, OnInit } from '@angular/core';
import { Individus } from '../models/individus';
import { GServeService } from '../services/crud/g-serve.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  popo:number | undefined;

  casiers:any;
  users:any;
  individus:any;

  constructor(private service:GServeService) { }

  ngOnInit(): void {
    this.service.getAllCasiers().subscribe((data)=>{
      this.casiers = data.length;
    }
    );

    this.service.getAllIndividus().subscribe((dataT)=>{
      this.individus = dataT.length;
    }
    );

    this.service.getAllUsers().subscribe((dataT)=>{
      this.users = dataT.length;
    }
    );
   
  }

}
