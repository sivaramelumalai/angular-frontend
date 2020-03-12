import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from "./accounts/accounts.component";
import { SummaryTabComponent} from './summary-tab/summary-tab.component'
import { PayTransferComponent} from './pay-transfer/pay-transfer.component'
import { PayNeftComponent} from "./pay-neft/pay-neft.component"
import { LoginComponent } from "./login/login.component"
import { RegisterComponent} from "./register/register.component"
import { AllUsersViewComponent } from './all-users-view/all-users-view.component'
import { OverallTransactionsComponent } from './overall-transactions/overall-transactions.component'
import { AccountActivityComponent } from './account-activity/account-activity.component'
import { PaymentActivityComponent } from './payment-activity/payment-activity.component'
import { OtpComponent } from './otp/otp.component'
import { TestComponent} from './test/test.component'
import { AuthGuard } from './auth.guard'
import { PendingAccountsComponent } from './pending-accounts/pending-accounts.component'
import { CreateAccountComponent } from './create-account/create-account.component'

const routes: Routes = [
  { path :"" , redirectTo:"/summary",pathMatch:'full'},
  { path:"summary",canActivate: [AuthGuard],component: SummaryTabComponent},
  { path:'account-activity',canActivate:[AuthGuard],component:AccountActivityComponent},
  { path: "accounts",canActivate: [AuthGuard], component:AccountsComponent},
  { path:"transfer",canActivate: [AuthGuard],component:PayTransferComponent},
  //{ path :"neft",canActivate: [AuthGuard],component:PayNeftComponent},
  { path:"login",component:LoginComponent},
  { path:"user-register", component:RegisterComponent},
  { path:"all-users", component:AllUsersViewComponent},
  { path:"overall-transactions", component:OverallTransactionsComponent},
  { path:"test", component:TestComponent},
  { path:"otp-verification",component:OtpComponent},
  { path:"payments", component:PaymentActivityComponent},
  { path:'pending-accounts',canActivate:[AuthGuard],component:PendingAccountsComponent},
  { path:'create-accounts',canActivate:[AuthGuard],component:CreateAccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
