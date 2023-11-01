import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    if(confirm('Voulez-vous vous deconnecter')){
      this.auth.logout();
    }
  }

}
