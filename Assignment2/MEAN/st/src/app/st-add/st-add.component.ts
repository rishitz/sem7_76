import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import {StService} from '../st.service'


@Component({
  selector: 'app-st-add',
  templateUrl: './st-add.component.html',
  styleUrls: ['./st-add.component.css']
})
export class StAddComponent implements OnInit {

  constructor(private aroute:ActivatedRoute,private router:Router,private fb:FormBuilder,private ss:StService) { }
id=this.aroute.snapshot.params.id;
  ngOnInit() {
    {}
    var obj;
    if(this.id!=null)
    {
      this.ss.getdata(this.id).subscribe(data=>{obj=data,console.log("up")
      this.angForm.patchValue({
        sid:obj._id,
        uname:obj.uname,
        city:obj.city,
        pass:obj.pass
      });
    });
    }
  }

  angForm=this.fb.group({
    sid:[''],
    uname:[''],
    city:[''],
    pass:['']
  });

  add()
  {
    var obj={
      _id:this.angForm.value.sid,
      uname:this.angForm.value.uname,
      city:this.angForm.value.city,
      pass:this.angForm.value.pass
    }
    if(this.id!=null)
    {
      this.ss.putdata(obj).subscribe(data=>console.log("update"));

    }
    else{
      this.ss.addData(obj).subscribe(res=>console.log("ins"));
    }
    
  }

}
