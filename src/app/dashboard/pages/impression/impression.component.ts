import { Component, OnInit } from '@angular/core';
import { GServeService } from 'src/app/services/crud/g-serve.service';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.css']
})
export class ImpressionComponent implements OnInit {

  casiers:any;
  state=true;
  text:any;

  constructor(private service:GServeService){}


  ngOnInit(): void {
    this.loadData();
  }

  loadData(){

    this.service.getAllCasiers().subscribe((data)=>{
      this.casiers = data  ;
    }
    );
   
  }

}
