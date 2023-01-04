import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interface/user';


@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.css']
})
export class PremierComponent {
  etudiants: number = 322;
  dir: any = { prenom: 'Adrien' };
  user: User = { id: 1, name: 'John', email: 'john@gmail.com' };
  user1: User = { id: 2, name: 'Johnny', email: 'johnny@gmail.com' };
  
  users: User[] = [this.user, this.user1, {id: 3, name: 'John', email: 'johnny@gmail'}];

  age: number = 19;
  position : number= 2;

  quantites: number[] = [12, 189, 17, 12];

  data: any[] = 
  [
    {
      "id": 1,
      "name": "abc",
      "address": 
        {
          "streetName": "cde",
          "streetId": 2
        },
      "projets": 
        [
          {
          "libelle":"lib1",
          "description":"desc1"
          },
          {
          "libelle":"lib1",
          "description":"desc1"
          }
        ]
    },
  {
    "id": 2,
    "name": "abc",
    "address": {
      "streetName": "cde",
      "streetId": 2
    },
    "projets": [
      {
      "libelle":"lib1",
      "description":"desc1"
      },
      {
      "libelle":"lib1",
      "description":"desc1"
      }
  ]
  }]

  // ici, on fait linjection de dependances du service router
  constructor(private router: Router) {
    
  }

  afficheMessage(message: string): void {
    alert("mon message: " + message);
  }

  afficheMessage1(message: string, event: any): void {
    alert("mon message: " + message);
    event.preventDefault();
    event.stopPropagation();
  }
goTo(): void{
  this.router.navigate(['/form']);
}
 
}



