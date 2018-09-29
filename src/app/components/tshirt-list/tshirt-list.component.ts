import { Component, OnInit } from '@angular/core';
import { tshirtService } from '../../services/tshirt.service';
import { Tshirt } from '../../models/tshirt';

@Component({
  selector: 'app-tshirt-list',
  templateUrl: './tshirt-list.component.html',
  styleUrls: ['./tshirt-list.component.css']
})
export class TshirtListComponent implements OnInit {
  
tshirtList: Tshirt[]
  tshirtListFiltered: Tshirt[] = []
  sizeList : String[] = []
  colorList : String[] = []
  selectedSizeList : String[] = []
  selectedColorList : String[] = []

  constructor(private tshirtService: tshirtService) { }

  findUnique(field,array){
    let uniqueList = []
    for(let item of array){
      if(!uniqueList.includes(item[field])){
        uniqueList.push(item[field])
      }      
    }
    return(uniqueList)
  }

  handleChange(){
    this.tshirtListFiltered = this.tshirtList.filter(tshirt => 
        this.selectedSizeList.length === 0 || this.selectedSizeList.includes(tshirt.size) //get item if no size is selected or if it matches the size in filter
    )
    this.tshirtListFiltered = this.tshirtListFiltered.filter(tshirt => 
      this.selectedColorList.length === 0 || this.selectedColorList.includes(tshirt.color)) //ditto
  }

  ngOnInit() {
    this.tshirtService.getTshirts().subscribe(tshirtList => {
      this.tshirtList = tshirtList
      this.tshirtListFiltered = tshirtList
      this.sizeList = this.findUnique('size',tshirtList)
      this.colorList = this.findUnique('color',tshirtList)
    })

 

  }

}
