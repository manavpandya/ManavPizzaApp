import { Component, OnInit } from '@angular/core';
import Data from '../data.json';

@Component({
  selector: 'app-pizzalist',
  templateUrl: './pizzalist.component.html',
  styleUrls: ['./pizzalist.component.css'],
})
export class PizzalistComponent implements OnInit {

  pizzas: [];
  breadType: string = '';
  pizzaType: string = '';
  pizzaCategory: string = '';

  constructor() { }

  ngOnInit() {
    this.pizzas = Data
    console.log(this.pizzas)
  }
}
