import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage, ModalContentPage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StorePage } from '../pages/store/store';
import { ReminderPage } from '../pages/reminder/reminder';
import { AddReminderPage } from '../pages/add-reminder/add-reminder';
import { SearchResultsPage } from '../pages/search_results/search_results';
import { CartPage } from '../pages/cart/cart';
import { MorePage } from '../pages/more/more';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AdminHomePage } from '../pages/admin-home/admin-home';
import { chiziElastic, ClickOutsideDirective } from './elastic-text-area.directive';
import { AddDrugPage } from '../pages/add-drug/add-drug';
import { RequestPage } from '../pages/request/request';
import { SuccessfulPage } from '../pages/successful/successful';
import { DrugService} from '../providers/drugs';
import { FilterService} from '../providers/filter.service';
import { Storage } from '@ionic/storage';
import { HealthTipsPage } from '../pages/health-tips/health-tips';
import { AdminHealthTipsPage } from '../pages/admin-health-tips/admin-health-tips';
import { ViewRequestPage } from '../pages/view-request/view-request';
import { AdminHealthTipsListPage } from '../pages/admin-health-tips-list/admin-health-tips-list';
import { MessagesPage } from '../pages/messages/messages';
import { MessageViewPage } from '../pages/message-view/message-view';
import { AdminSearchPage } from '../pages/admin-search/admin-search';
import { AppGlobals } from './global';
import { ProfilePage } from '../pages/profile/profile';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModalContentPage,
    StorePage,
    ReminderPage,
    AddReminderPage,
    SearchResultsPage,
    CartPage,
    MorePage,
    RegisterPage,
    LoginPage,
    chiziElastic,
    ClickOutsideDirective,
    AdminHomePage,
    AddDrugPage,
    RequestPage,
    SuccessfulPage,
    HealthTipsPage,
    AdminHealthTipsPage,
    ViewRequestPage,
    MessagesPage,
    MessageViewPage,
    AdminSearchPage,
    ProfilePage,
    AdminHealthTipsListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModalContentPage,
    StorePage,
    ReminderPage,
    AddReminderPage,
    SearchResultsPage,
    CartPage,
    MorePage,
    RegisterPage,
    LoginPage,
    AdminHomePage,
    AddDrugPage,
    RequestPage,
    SuccessfulPage,
    HealthTipsPage,
    AdminHealthTipsPage,
    ViewRequestPage,
    MessagesPage,
    MessageViewPage,
    AdminSearchPage,
    ProfilePage,
    AdminHealthTipsListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DrugService, Storage, FilterService, AppGlobals]
})
export class AppModule {}
