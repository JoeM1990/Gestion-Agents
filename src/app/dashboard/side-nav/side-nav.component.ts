import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{

  list = [
    {
      number: '1',
      name: 'dashboard',
      icon: 'fa-solid fa-house',
      url:'/dashboard',
    },
    {
      number: '2',
      name: 'Gestion Utilisateurs',
      icon: 'fa-sharp fa-solid fa-users',
      url: '/gs-users',
    },
    {
      number: '3',
      name: 'Gestion Individus',
      icon: 'fa-sharp fa-solid fa-user',
      url:'/gs-individus',
    },
    {
      number: '4',
      name: 'Gestion Casiers',
      icon: 'fa-sharp fa-solid fa-folder',
      url:'/gs-casiers',
    },
    {
      number: '5',
      name: 'Impression',
      icon: 'fa-sharp fa-solid fa-print',
      url:'/impression',
    },
    
   
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
