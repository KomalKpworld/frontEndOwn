import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() sideNavStatus: boolean = false
  list = [
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house'
    },
    {
      number: '2',
      name: 'cart-shopping',
      icon: 'fa-solid fa-cart-shopping'
    }, {
      number: '3',
      name: 'shop',
      icon: 'fa-solid fa-shop'
    }, {
      number: '4',
      name: 'cart-pulse',
      icon: ' fa-solid fa-cart-plus'
    }, {
      number: '5',
      name: 'images',
      icon: ' fa-solid fa-images'
    }, {
      number: '6',
      name: 'home',
      icon: ' fa-solid fa-house'
    }, {
      number: '7',
      name: 'home',
      icon: ' fa-solid fa-house'
    },
  ]
  ngOnInit(): void {
    
  }
}
