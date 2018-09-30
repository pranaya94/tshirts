import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store'
import { Observable } from 'rxjs'
import { IAppState } from '../../store'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @select() cartQuantity$: Observable<number>
  cartQuantity: Number

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.cartQuantity$.subscribe(cartQuantity => this.cartQuantity = cartQuantity)  
  }

}
