import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user: User = { id: 1, name: 'John', email: 'john@gmail.com' };
  user1: User = { id: 2, name: 'Johnny', email: 'johnny@gmail.com' };
  user3: User = { id: 4, name: 'onny', email: 'nnyy@gmail.com' };
  
  users: User[] = [this.user, this.user1, {id: 3, name: 'John', email: 'johnny@gmail'}, this.user3];

  constructor(private router: Router) {
  }

  getUserDetails(userId: number){
    this.router.navigate(['/users' , userId]);
  }
}
