import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarComponent } from './components/star/star.component';
import { TopOfPAgeComponent } from './components/top-of-page/top-of-page.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { LinkedInPostComponent } from './components/linked-in-post/linked-in-post.component';
import { AppModelComponent } from './components/app-model/app-model.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarComponent,
    TopOfPAgeComponent,
    ComponentDocumentationComponent,
    
    ServiceDocumentationComponent,
    DirectiveDocumentationComponent,
    LoaderComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
    LinkedInPostComponent,
    AppModelComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
