import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' 
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private impsUrl = "http://localhost:3002/transaction/credit/imps"
  private neftUrl = "http://localhost:3002/transaction/credit/neft"

  private rtgsUrl = "http://localhost:3002/transaction/credit/rtgs"


  constructor(private http:HttpClient,private _router:Router) { }

  impsTransaction(usercredentials:any){
    console.log("serv "+usercredentials)
    const d = JSON.parse(usercredentials)
    return this.http.put<any>(this.impsUrl,d)
  }

  neftTransaction(usercredentials:any){
    const d = JSON.parse(usercredentials)
    return this.http.put<any>(this.neftUrl,d)
  }

  rtgsTransaction(usercredentials:any){
    const d = JSON.parse(usercredentials)
    return this.http.put<any>(this.rtgsUrl,d)
  }
}
