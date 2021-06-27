import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';
import { UsersService } from './services/users.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UrlhandlerService } from './services/interceptors/urlhandler.service';
import { ErrorHandlerInterceptor } from './services/interceptors/error-handler-interceptor';
import { UserComponent } from './users/user/user.component';
import { ModalService } from './services/modal.service';
import { LoadingInterceptor } from './services/interceptors/loading-interceptor.service';
import { ResolverComponent } from './users/resolver/resolver.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewUsersComponent,
    UserComponent,
    ResolverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    ModalService,
    { provide: HTTP_INTERCEPTORS, useClass: UrlhandlerService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
