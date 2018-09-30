import { Component, OnInit } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import { NgRedux, select } from '@angular-redux/store'
import { Observable } from 'rxjs'
import { IAppState } from '../../store'
import { Tshirt } from '../../models/tshirt'
import { SELECT_TSHIRT } from '../../actions/types'

@Component({
  selector: 'app-tshirt-details',
  templateUrl: './tshirt-details.component.html',
  styleUrls: ['./tshirt-details.component.css']
})
export class TshirtDetailsComponent implements OnInit {

  id: Number
  @select() selectedTshirt$: Observable<Tshirt>
  selectedTshirt: Tshirt
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
  
  }

}
