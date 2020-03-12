import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http' 
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private createUserUrl = "http://localhost:3002/users/create/customer"
  private loginUrl = "http://localhost:3002/users/login"
  
  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  
  constructor(private http:HttpClient,private _router:Router) { }

  createUser(user){
    return this.http.post<any>(this.createUserUrl,user,{headers: this.headers})
  }
  loginUser(usercredentials){
    return this.http.post<any>(this.loginUrl,usercredentials,{headers: this.headers})
  }
  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    this._router.navigate(['/login'])
  }
  getToken() {
    return localStorage.getItem('token')
  }
}
