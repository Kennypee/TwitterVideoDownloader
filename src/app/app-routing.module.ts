import { BackgroundComponent } from './background/background.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';


const routes: Routes = [
  { path: 'background', component: BackgroundComponent },
  { path: '**', component: PopupComponent, }
];

@NgModule({
  declarations: [PopupComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
