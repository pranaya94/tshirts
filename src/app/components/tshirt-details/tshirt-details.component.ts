import { Component, OnInit } from '@angular/core'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-tshirt-details',
  templateUrl: './tshirt-details.component.html',
  styleUrls: ['./tshirt-details.component.css']
})
export class TshirtDetailsComponent implements OnInit {

  Id: any

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.Id = params["id"]
    })
    console.log(this.Id)
  }
  constructor(private route: ActivatedRoute){
  
  }

}
