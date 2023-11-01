import { Component, OnInit } from '@angular/core';
import { GServeService } from 'src/app/services/crud/g-serve.service';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.css']
})
export class ImpressionComponent implements OnInit {

  casiers:any;
  state=false;
  text:any;

  constructor(private service:GServeService){}


  ngOnInit(): void {
    this.loadData();
  }

  loadData(){

    this.service.chercheCasier(this.text).subscribe((data)=>{
      this.casiers = data  ;

      if(data){
        this.state=true;
      }

    }
    );
   
  }

}
