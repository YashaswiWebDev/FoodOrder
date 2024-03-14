import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  constructor(private cartService:CartService){
    this.setCart();
  }
  cart!:Cart;
  ngOnInit(): void {
}
setCart(){
  this.cart=this.cartService.getCart();
}
removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart();

}
changeQuantity(cartItem:CartItem,quantityInString:string){
const quantity=parseInt(quantityInString);
this.cartService.changeQuantity(cartItem.food.id, quantity);
this.setCart();
}
}
