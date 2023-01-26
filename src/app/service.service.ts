import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url="https://prickly-knickers-boa.cyclic.app/Orders";
  getAllData(){
    return this.http.get(this.url).pipe(map((res:any)=>{
      return res;
    }));
  }
}
