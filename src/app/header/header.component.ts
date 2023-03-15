import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  submenuShow:boolean = false;
  submenuWhatWe:boolean = false;

  constructor() { }

  ngOnInit(): void {
    // const menuDropdownEvent = document.getElementsByClassName('menu-item dropdown');
    // console.log(menuDropdownEvent,'dropdown');
    // // menuDropdownEvent.addEventListener('click',function(){});
    // [menuDropdownEvent].forEach((element,index,arr) => {
    //   // Do something with each element
    //   element[index].addEventListener('click',function(event){
    //     event.preventDefault();
    //     event.stopPropagation();
    //   });
    // })
  }

  stopEvent(event: { preventDefault: () => void; stopPropagation: () => void; }){
    event.preventDefault();
    event.stopPropagation();

  }

  // menuToggle = document.getElementById('menu-toggler');
  menuToggler(event: any):void{
    console.log('clickk');
    this.toggleBodyClass("menu-active");
  }

  toggleBodyClass(className: string) {
    let activeElement:any = document.getElementsByTagName('body');
    activeElement[1].classList.toggle(className);
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
