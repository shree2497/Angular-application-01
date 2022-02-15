import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {RegisterComponent} from './register/register.component';
import { AuthGuard } from './register/auth.guard';


const routes: Routes = [
  {path: 'Home',component:HomeComponent
  },
  {path: 'User', component:UserComponent,canActivate:[AuthGuard]},
  {path:'Register', component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
