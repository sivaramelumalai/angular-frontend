import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class UsersActionService {

  private userAccountsUrl = "http://localhost:3002/users/accounts/"
  private userProfileUrl = "http://localhost:3002/users/"
  private userRoleUrl = "http://localhost:3002/users/role"
  private userTransactionUrl = "http://localhost:3002/transaction/"
  private otpGenerationUrl = "http://localhost:3002/otp-gen/"
  private otpVerifyUrl = "http://localhost:3002/opt-verification/"
  private paymentsUrl = "http://localhost:3002/transaction/payments/"
  private pendingUrl  =  "http://localhost:3002/accounts/pending"

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private http:HttpClient) { }

  
  getUserAccounts(id){
    
    return this.http.get(this.userAccountsUrl+id)
  }
  getUserProfile(id){
    return this.http.get(this.userProfileUrl+id)

  }
  getUserRole(){
    return this.http.get(this.userRoleUrl)
  }
  getUserTransactions(id:any){
    return this.http.get(this.userTransactionUrl+id)
  }
  getOtp(id:any,empty:any){
    return this.http.post<any>(this.otpGenerationUrl+id,empty,{headers: this.headers})
  }

  verifyOtp(id:any,empty:any){
    return this.http.post<any>(this.otpVerifyUrl+id,empty,{headers: this.headers})
  }
  getUserPayments(id){
    return this.http.get(this.paymentsUrl+id)
  }

  getPendingAccounts(){
    return this.http.get(this.pendingUrl)
  }

}

