import { Component, OnInit } from '@angular/core'
import { NgRedux, select } from '@angular-redux/store'
import { Observable } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'
import { IAppState } from '../../store'
import { CartDialogComponent } from '../cart-dialog/cart-dialog.component'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [MatDialog]
})
export class CartComponent implements OnInit {

  @select() cartQuantity$: Observable<number>
  cartQuantity: number
  @select() cartPrice$: Observable<number>
  cartPrice: number

  constructor(public dialog: MatDialog,private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.cartQuantity$.subscribe(cartQuantity => this.cartQuantity = cartQuantity)  
    this.cartPrice$.subscribe(cartPrice => this.cartPrice = cartPrice)  
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CartDialogComponent, {
      // width: '250px',
      data: {}
    })

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result
    })
  }

}
