import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ListingsComponent } from './features/listings/listings.component';
import { VehicleDetailComponent } from './features/vehicle-detail/vehicle-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },  // Strona główna z wyszukiwarką
  { path: 'cars', component: ListingsComponent },  // Wyniki wyszukiwania
  { path: 'vehicle-detail/:id', component: VehicleDetailComponent } // Szczegóły ogłoszenia
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
