import { Component, OnInit } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import { NgRedux, select } from '@angular-redux/store'
import { Observable } from 'rxjs'
import { IAppState } from '../../store'
import { Tshirt } from '../../models/tshirt'
import { Cart } from '../../models/cart'
import { SELECT_TSHIRT, ADD_ITEM_TO_CART } from '../../actions/types'
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-tshirt-details',
  templateUrl: './tshirt-details.component.html',
  styleUrls: ['./tshirt-details.component.css']
})
export class TshirtDetailsComponent implements OnInit {

  id: number
  @select() selectedTshirt$: Observable<Tshirt>
  selectedTshirt: Tshirt
  @select() cart$: Observable<Cart[]>
  cart: Cart[]
  tshirtKeys: String[]
  buttonText: String = 'Add To Cart'

  getButtonText(cart,selectedTshirt){
    let index = cart.findIndex(item => item.id === selectedTshirt.id)
      if(index > -1 && cart[index].buyQuantity > 0){
        return('Add One More')
      } else {
        return('Add To Cart')
      }
  }

  constructor(private ngRedux: NgRedux<IAppState>, private route: ActivatedRoute){ }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = params["id"]
    })
    this.selectedTshirt$.subscribe(selectedTshirt => this.selectedTshirt = selectedTshirt)
    this.cart$.subscribe(cart => this.cart = cart)

    this.ngRedux.dispatch({type: SELECT_TSHIRT, id: this.id})
    this.buttonText = this.getButtonText(this.cart, this.selectedTshirt)
    this.tshirtKeys = Object.keys(this.selectedTshirt).filter(key => key !== 'picture')
  }

  handleBuyClick(){
    this.ngRedux.dispatch({ type: ADD_ITEM_TO_CART })
    this.buttonText = this.getButtonText(this.cart, this.selectedTshirt)
  }

}
