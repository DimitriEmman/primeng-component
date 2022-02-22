import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CarousselComponent } from './components/caroussel/caroussel.component';
import { TableComponent } from './components/table/table.component';
import { TabviewComponent } from './components/tabview/tabview.component';

const routes: Routes = [
  {path:'', component: TabviewComponent},
  { path: 'table', component: TableComponent},
  { path: 'product', component: CarousselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
