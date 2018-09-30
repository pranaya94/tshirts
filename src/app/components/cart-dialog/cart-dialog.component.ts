import { Component, OnInit } from '@angular/core'
import { NgRedux, select } from '@angular-redux/store'
import { Observable } from 'rxjs'
import { IAppState } from '../../store'
import { Cart } from '../../models/cart'
import { REMOVE_CART_ITEM, UPDATE_CART_ITEM_QTY } from '../../actions/types'
@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  @select() cartPrice$: Observable<number>
  cartPrice: number
  @select() cart$: Observable<Cart[]>
  cart: Cart[]

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.cartPrice$.subscribe(cartPrice => this.cartPrice = cartPrice)
    this.cart$.subscribe(cart => this.cart = cart)
  }

  handleQtyChange(id,qty){
    this.ngRedux.dispatch({type: UPDATE_CART_ITEM_QTY, updates: { id, qty }})
    console.log(this.cart)
  }
  handleRemoveClick(id){
    this.ngRedux.dispatch({type: REMOVE_CART_ITEM, id})
  }

}
