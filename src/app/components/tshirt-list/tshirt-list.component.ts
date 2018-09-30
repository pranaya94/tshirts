import { Component, OnInit } from '@angular/core'
import { NgRedux, select } from '@angular-redux/store'
import { Observable } from 'rxjs'
import { IAppState } from '../../store'
import { GET_TSHIRT_LIST, FILTER_TSHIRT_LIST, GET_SIZE_LIST, GET_COLOR_LIST, GET_SELECTED_SIZE_LIST, GET_SELECTED_COLOR_LIST } from '../../actions/types'
import { tshirtService } from '../../services/tshirt.service'
import { Tshirt } from '../../models/tshirt'

@Component({
  selector: 'app-tshirt-list',
  templateUrl: './tshirt-list.component.html',
  styleUrls: ['./tshirt-list.component.css']
})
export class TshirtListComponent implements OnInit {

  @select() tshirtList$: Observable<Tshirt[]>
  tshirtList: Tshirt[]
  @select () tshirtListFiltered$: Observable<Tshirt[]>
  tshirtListFiltered: Tshirt[]
  @select () sizeList$: Observable<String[]>
  sizeList: String[]
  @select () colorList$: Observable<String[]>
  colorList: String[]
  @select () selectedSizeList$: Observable<String[]>
  selectedSizeList: String[]
  @select () selectedColorList$: Observable<String[]>
  selectedColorList: String[]

  constructor(private ngRedux: NgRedux<IAppState>,private tshirtService: tshirtService) { }

  handleChange(){
    this.ngRedux.dispatch({type : GET_SELECTED_SIZE_LIST, selectedSizeList: this.selectedSizeList})
    this.ngRedux.dispatch({type : GET_SELECTED_COLOR_LIST, selectedColorList: this.selectedColorList})
    this.ngRedux.dispatch({type: FILTER_TSHIRT_LIST})
  }

  ngOnInit() {
    /* Subscriptions */
    this.tshirtList$.subscribe(tshirtList => this.tshirtList = tshirtList)
    this.tshirtListFiltered$.subscribe(tshirtListFiltered => this.tshirtListFiltered = tshirtListFiltered)
    this.sizeList$.subscribe(sizeList => this.sizeList = sizeList)
    this.colorList$.subscribe(colorList => this.colorList = colorList)
    this.selectedSizeList$.subscribe(selectedSizeList => this.selectedSizeList = selectedSizeList)
    this.selectedColorList$.subscribe(selectedColorList => this.selectedColorList = selectedColorList)

    this.tshirtService.getTshirts().subscribe(tshirtList => {
      this.ngRedux.dispatch({type: GET_TSHIRT_LIST, tshirtList})
      this.ngRedux.dispatch({type: GET_SIZE_LIST, tshirtList})
      this.ngRedux.dispatch({type: GET_COLOR_LIST, tshirtList})
      this.ngRedux.dispatch({type: FILTER_TSHIRT_LIST, tshirtList})
    })
  }
}
