import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';

const routes: Routes = [
  { path: '', component: ComponentDocumentationComponent },
  { path: 'services', component: ServiceDocumentationComponent },
  { path: 'directives', component: DirectiveDocumentationComponent },
  { path: 'pipes', loadChildren: () => import('./pipes/pipes.module').then((module) => module.PipesModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
