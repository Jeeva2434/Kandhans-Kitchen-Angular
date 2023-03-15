import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  menuItemList = [
    {
      name: 'Breakfast',
      router: 'breakfast'
    },
    {
      name: 'Lunch',
      router: 'lunch'
    },
    {
      name: 'Dinner',
      router: 'dinner'
    },
    {
      name: 'kerala lunch',
      router: 'kerala_lunch'
    },
    {
      name: 'Payasam Varieties',
      router: 'payasam _varieties'
    },
    {
      name: 'Sweets',
      router: 'sweets'
    },
    {
      name: 'Dosa Varieties',
      router: 'dosa_varieties'
    },
    {
      name: 'Gravy Varieties',
      router: 'gravy_varieties'
    },
    {
      name: 'Raitha Varieties',
      router: 'raitha_varieties'
    },
    {
      name: 'Rice Receipe Varieties',
      router: 'rice_receipe_varieties'
    }
  ];

  whatWeDo = [
    {
      name:'Engagement',
      route:'engagement'
    },
    {
      name:'Wedding',
      route:'wedding'
    },
    {
      name:'Baby Shower',
      route:'baby_shower'
    },
    {
      name:'House Warming',
      route:'house_warming'
    },
    {
      name:'Birthday Party',
      route:'birthday_party'
    },
    {
      name:'Corporate Events',
      route:'corporate_events'
    }
  ]
}
