import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //Service qui permet de recupere le parametre dans la route appeler
  constructor(private route: ActivatedRoute) {

  }

  //method du cycle de vie dun component
  //method appeler a l initialisation du composant
  ngOnInit() {
    //method synchron
    const id = this.route.snapshot.params['userid'];
    console.log(id);
  }
}