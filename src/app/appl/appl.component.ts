import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-appl',
  templateUrl: './appl.component.html',
  styleUrls: ['./appl.component.css']
})
export class ApplComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(){
    this.authService.autoLogin();
  }

}
