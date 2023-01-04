import { Component } from '@angular/core';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  
  constructor() { }

  log!: string;
  pwd!: string;
  userArray: string[] = [];

  register() {
  // Méthode appelé lors de la soumission
  console.log(this.log, this.pwd);
  this.userArray.push(`${this.log}, ${this.pwd}`);
  }


}
