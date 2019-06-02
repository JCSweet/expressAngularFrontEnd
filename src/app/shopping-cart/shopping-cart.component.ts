import { Component, OnInit } from '@angular/core';
import { Api } from '../services/cartServices.service';

interface items {
  id: any;
  product: string;
  price: number;
  quantity: number;
}

interface ApiData {
data: items []
}

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
  items: object[];
  constructor(private api: Api) { }

  ngOnInit() {
   }

   getShoppingCart = () => {
    this.api.getAllItems().subscribe((data: ApiData) => {
      console.log(data);
       this.items = data.data;
    });
  };
};
