import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule} from 'ng-apexcharts'
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { SummaryTabComponent } from './summary-tab/summary-tab.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PayTransferComponent } from './pay-transfer/pay-transfer.component';
import { PaymentTabsComponent } from './payment-tabs/payment-tabs.component';
import { TransferNeftComponent } from './transfer-neft/transfer-neft.component';
import { PayNeftComponent } from './pay-neft/pay-neft.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthGuard} from './auth.guard'
import { UsersActionService } from './users-action.service'
import { TokenInterceptorService } from './token-interceptor.service';
import { AllUsersViewComponent } from './all-users-view/all-users-view.component';
import { BankersViewTabComponent } from './bankers-view-tab/bankers-view-tab.component';
import { OverallTransactionsComponent } from './overall-transactions/overall-transactions.component';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { TestComponent } from './test/test.component';
import { AccountActivityComponent } from './account-activity/account-activity.component';
import { OtpComponent } from './otp/otp.component';
import { UserchartComponent } from './userchart/userchart.component';
import { PaymentActivityComponent } from './payment-activity/payment-activity.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PendingAccountsComponent } from './pending-accounts/pending-accounts.component';
import { CreateAccountComponent } from './create-account/create-account.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountSummaryComponent,
    TabBarComponent,
    ProfileComponent,
    AccountsTableComponent,
    TransferMoneyComponent,
    SummaryTabComponent,
    AccountsComponent,
    PayTransferComponent,
    PaymentTabsComponent,
    TransferNeftComponent,
    PayNeftComponent,
    LoginComponent,
    RegisterComponent,
    AllUsersViewComponent,
    BankersViewTabComponent,
    OverallTransactionsComponent,
    AccountCreationComponent,
    TestComponent,
    AccountActivityComponent,
    OtpComponent,
    UserchartComponent,
    PaymentActivityComponent,
    PendingAccountsComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgApexchartsModule,
    Ng2SearchPipeModule,
  ],
  providers: [AuthService, AuthGuard,UsersActionService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
