import { Component, OnInit } from '@angular/core';
import { BankerViewService } from '../banker-view.service'
@Component({
  selector: 'app-all-users-view',
  templateUrl: './all-users-view.component.html',
  styleUrls: ['./all-users-view.component.css']
})
export class AllUsersViewComponent implements OnInit {
  public allusers ;
  public savingUsers ;
  public currentUsers ;

  constructor(private bankviewservice:BankerViewService) { }

  ngOnInit(){
    this.bankviewservice.getUsers().subscribe((data: any)=>{
      console.log(data[0].role)
      this.allusers = data
      })
    this.bankviewservice.getSavingsUsers().subscribe((data: any)=>{
      console.log(data[0].role)
      this.savingUsers = data
      })
    this.bankviewservice.getCurrentUsers().subscribe((data: any)=>{
      console.log(data[0].role)
      this.currentUsers = data
      })

  }

}
