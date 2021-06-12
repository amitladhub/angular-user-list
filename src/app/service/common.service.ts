import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public userLists:any =[{"username":1001,"first_name":"Amit","last_name":"Lad","city":"Pune","department":"Agriculture"},
  {"username":1011,"first_name":"Vishal","last_name":"D","city":"Mumbai","department":"Chemical"},
  {"username":1003,"first_name":"Rishi","last_name":"Nanda","city":"Delhi","department":"Culture"},
  {"username":1004,"first_name":"Vijay","last_name":"Khot","city":"Kolhapur","department":"Chemical"},
  {"username":1005,"first_name":"Nikhi","last_name":"Swami","city":"Satara","department":"Culture"},
  {"username":1006,"first_name":"Pavan","last_name":"Singh","city":"Delhi","department":"Chemical"},
  {"username":1007,"first_name":"Abhi","last_name":"Rathod","city":"Sangali","department":"Culture"},
  {"username":1008,"first_name":"Prathmesh","last_name":"Patil","city":"Mumbai","department":"Agriculture"},
  {"username":1009,"first_name":"Piyush","last_name":"Chawala","city":"Nagapur","department":"Coal"},
  {"username":1010,"first_name":"Vinod","last_name":"K","city":"Pune","department":"Chemical"}]

  constructor(private http: HttpClient) { }

 
  getHeroes(): Observable<any> {
    let apiURL = `assets/config/user.json`;
    return this.http.get(apiURL);
  }
}
