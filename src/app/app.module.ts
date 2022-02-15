import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { LoadingSpinnerComponent } from './shared/loadingSpinner/loading-spinner.component';
import { ApplComponent } from './appl/appl.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    RegisterComponent,
    LoadingSpinnerComponent,
    ApplComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent,
  UserComponent,RegisterComponent]
})
export class AppModule { }
