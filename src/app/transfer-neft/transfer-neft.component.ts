import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-transfer-neft',
  templateUrl: './transfer-neft.component.html',
  styleUrls: ['./transfer-neft.component.css']
})
export class TransferNeftComponent implements OnInit {
  private date: Date = new Date()
  public neftTransactionDet = {transaction_type:"neft",
                              from_acc_no:'',
                              to_acc_no:'',
                              date:this.date,
                              amount:''}

  constructor(private transaction:TransactionsService,private _router:Router) { }

  ngOnInit(): void {
  }

  neftTransfer(){
    console.log(this.neftTransactionDet)
    console.log(JSON.stringify(this.neftTransactionDet))
    this.transaction.impsTransaction(JSON.stringify(this.neftTransactionDet))
    .subscribe(res=>{
      console.log(res)
      // this._router.navigate(['/login'])
    }
      ,err=>console.log(err))
  
  }


}
