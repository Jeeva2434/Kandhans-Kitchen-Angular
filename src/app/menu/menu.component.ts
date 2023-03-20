import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuListItems = [
    {
      name:'Beakfast',
      route:'../breakfast',
      img:'assets/images/breakfast-g475ae764b_1920.jpg'
    },
    {
      name:'Lunch',
      route:'../breakfast',
      img:'assets/images/breakfast-g475ae764b_1920.jpg'
    },
    {
      name:'Dinner',
      route:'../breakfast',
      img:'assets/images/breakfast-g475ae764b_1920.jpg'
    },
    {
      name:'Sweets',
      route:'../breakfast',
      img:'assets/images/breakfast-g475ae764b_1920.jpg'
    }
  ]
}
