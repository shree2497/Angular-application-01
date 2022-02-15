import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  // title = 'App1';
   channelname ='USER SERVICES';
   isAuthenticated=false;
   private userSub:Subscription;
  
constructor(private authService:AuthService){}
ngOnInit() {
  this.userSub=this.authService.user.subscribe(user =>{
    this.isAuthenticated=!!user;
    console.log(!user);
    console.log(!!user);
  });
}
 
// loggedin(){
//   return localStorage.getItem('token');
// }
onLogout(){
  this.authService.logout();
}
ngOnDestroy(): void {
    this.userSub.unsubscribe();
}
// }

}
