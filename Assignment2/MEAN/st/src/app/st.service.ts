import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StService {
  uri="http://localhost:3000";

  constructor(private http:HttpClient) { }

  addData(obj)
  {
    return this.http.post(this.uri+'/submit',obj);
  }
  fetchdata()
  {
    return this.http.get(this.uri+'/show');
  }
  deldata(key)
  {
    return this.http.delete(this.uri+'/delete/'+key);
  }
  getdata(key)
  {
    return this.http.get(this.uri+'/edit/'+key);
  }
  putdata(obj)
  {
    return this.http.put(this.uri+'/update/'+obj._id,obj);
  }
}
