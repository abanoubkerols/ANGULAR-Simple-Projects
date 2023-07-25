import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { Pipes_Routes } from './pipes.rout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from './truncate/truncate.pipe';
import {CreditCardFormatterPipe} from './credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from './Flatten/flatten.pipe'





@NgModule({
  declarations: [
    PipeDocumentationComponent,
    TruncatePipe,
    CreditCardFormatterPipe,
    FlattenPipe


  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Pipes_Routes)
  ]
})
export class PipesModule { }
