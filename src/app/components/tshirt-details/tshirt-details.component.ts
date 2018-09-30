import { Component, OnInit } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import { NgRedux, select } from '@angular-redux/store'
import { Observable } from 'rxjs'
import { IAppState } from '../../store'
import { Tshirt } from '../../models/tshirt'
import { Cart } from '../../models/cart'
import { SELECT_TSHIRT, ADD_ITEM_TO_CART } from '../../actions/types'

@Component({
  selector: 'app-tshirt-details',
  templateUrl: './tshirt-details.component.html',
  styleUrls: ['./tshirt-details.component.css']
})
export class TshirtDetailsComponent implements OnInit {

  id: Number
  @select() selectedTshirt$: Observable<Tshirt>
  selectedTshirt: Tshirt
  @select() cart$: Observable<Cart[]>
  cart: Cart[]
  tshirtKeys: String[]

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = params["id"]
    })
    this.selectedTshirt$.subscribe(selectedTshirt => this.selectedTshirt = selectedTshirt)

    this.ngRedux.dispatch({type: SELECT_TSHIRT, id: this.id})
    this.tshirtKeys = Object.keys(this.selectedTshirt).filter(key => key !== 'picture')
  }
  constructor(private ngRedux: NgRedux<IAppState>, private route: ActivatedRoute){
    this.cart$.subscribe(cart => this.cart = cart)
    console.log(this.cart)
  }

  handleBuyClick(){
    this.ngRedux.dispatch({ type: ADD_ITEM_TO_CART })
    console.log(this.cart)
  }

}
