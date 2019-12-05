import { Component, OnInit } from '@angular/core';
import {StService} from '../st.service';

@Component({
  selector: 'app-st-get',
  templateUrl: './st-get.component.html',
  styleUrls: ['./st-get.component.css']
})
export class StGetComponent implements OnInit {
  studlist:any

  constructor(private ss:StService) { }

  ngOnInit() {
    this.fetchdata();
  }
  fetchdata()
  {
    this.ss.fetchdata().subscribe(data=>this.studlist=data);
  }
  del(key)
  {
    alert(key);
    this.ss.deldata(key._id).subscribe(res=>console.log("del"));
  }

}
