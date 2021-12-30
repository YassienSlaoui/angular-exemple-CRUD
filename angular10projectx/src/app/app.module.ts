import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { CutWordPipe } from './cut-word.pipe';
import { InputFormatDirective } from './directives/input-format.directive';
import { FisrsrtComponent } from './first/first.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { LikeDeslikeComponent } from './like-deslike/like-deslike.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { SecondComponent } from './second/second.component';
import { ShowCaseNgContentContainerComponent } from './show-case-ng-content-container/show-case-ng-content-container.component';
import { ShowCaseNgForComponent } from './show-case-ng-for/show-case-ng-for.component';
import { ShowCaseNgSwitchComponent } from './show-case-ng-switch/show-case-ng-switch.component';
import { UsehooksComponent } from './usehooks/usehooks.component';
import { serviceString } from './services/services';

@NgModule({
  declarations: [
    AppComponent,
    LikeDeslikeComponent,
    FisrsrtComponent,
    SecondComponent,
    CutWordPipe,
    ShowCaseNgContentContainerComponent,
    ShowCaseNgForComponent,
    ShowCaseNgSwitchComponent,
    InputFormatDirective,
    FormValidationComponent,
    NavbarComponent,
    UsehooksComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [serviceString],
  bootstrap: [AppComponent]
})
export class AppModule { }
