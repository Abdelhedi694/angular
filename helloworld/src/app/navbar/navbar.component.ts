import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isMouseover:boolean
  constructor() { 
    this.isMouseover = false
  }
  
  ngOnInit(): void {
  }

}
