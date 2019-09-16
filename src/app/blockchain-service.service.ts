import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BlockchainServiceService {

  constructor(private _http:Http) { }
  onRegister(info){  
    // console.log(info);
    // const myObjStr = JSON.stringify(info);
    // console.log(myObjStr);
    return this._http.post("http://localhost:4000/users", info)
    .subscribe(result => {
      console.log(result);
  })
}
}