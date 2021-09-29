import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public static linkEnabled:boolean=false;
  constructor() { }
  ngOnInit(): void {
  }
  public getLink():boolean{
    return NavbarComponent.linkEnabled;
  }
  public setLink(bool:boolean){
    NavbarComponent.linkEnabled=bool;
  }


}
