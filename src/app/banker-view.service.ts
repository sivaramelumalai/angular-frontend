import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BankerViewService {
  private savingAccUsersUrl = "http://localhost:3002/accounts/savings"
  private currentAccUsersUrl = "http://localhost:3002/accounts/current"
  private allUsersUrl = "http://localhost:3002/users"
  private accountUrl = "http://localhost:3002/accounts/create"

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private http:HttpClient) { }
  
  getUsers(){
    return this.http.get(this.allUsersUrl)
  }
  getSavingsUsers(){
    return this.http.get(this.savingAccUsersUrl)
  }
  getCurrentUsers(){
    return this.http.get(this.currentAccUsersUrl)
  }
  createAccount(user){
    return this.http.post(this.accountUrl,user,{headers: this.headers})
  }

}
