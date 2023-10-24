import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcertsComponent } from './concert/concert.component'; 
import { AddConcertComponent } from './add-concert/add-concert.component'; 
import { UpdateConcertComponent } from './update-concert/update-concert.component';

const routes: Routes = [
  { path: "concerts", component: ConcertsComponent }, 
  { path: "add-concert", component: AddConcertComponent },
  { path: "update-concert/:id", component: UpdateConcertComponent },
  { path: "", redirectTo: "concerts", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
