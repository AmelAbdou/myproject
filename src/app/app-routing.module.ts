import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PremierComponent } from './component/premier/premier.component';
import { UserComponent } from './component/user/user.component';
import { UsersComponent } from './component/users/users.component';


const routes: Routes = [
  { path: '', component: PremierComponent },
  { path: 'form', component: FormulaireComponent },
  { path: "404", component: NotfoundComponent },
  {path: "users", component: UsersComponent },
  {path: "users/:userid", component: UserComponent},

  // Tjr placer en dernier sinon les routes ne seront pas
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
