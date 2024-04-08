import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartBooks: any;
  orderReceived: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartBooks = JSON.parse(data);
    } else {
      this.cartBooks = [];
    }

  }
  removeFromCart(bookToRemove: any) {
    this.cartBooks = this.cartBooks.filter((book: any) => book !== bookToRemove);
    localStorage.setItem('cart', JSON.stringify(this.cartBooks));
  }

  buyBooks() {
    
    this.orderReceived = true;
    localStorage.removeItem('cart'); 
   
    alert('Your order has been received!');
}

  goBack() {
    this.router.navigate(['/shop']);
  }
}
