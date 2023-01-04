import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PremierComponent } from './component/premier/premier.component';
import { TableComponent } from './component/table/table.component';

import { UserComponent } from './component/user/user.component';
import { UsersComponent } from './component/users/users.component';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { EmailValidatorDirective } from './directives/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    TableComponent,
    PremierComponent,
    NotfoundComponent,
    UserComponent,
    UsersComponent,
    PasswordValidatorDirective,
    EmailValidatorDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
