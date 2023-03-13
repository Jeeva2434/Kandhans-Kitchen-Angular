import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  // menuToggle = document.getElementById('menu-toggler');
  menuToggler(event: any):void{
    console.log('clickk');
    this.toggleBodyClass("menu-active");
  }

  toggleBodyClass(className: string) {
    let activeElement:any = document.getElementById('head_wrapper');
    activeElement.classList.toggle(className);
  }

}
