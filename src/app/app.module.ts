import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcertsComponent } from './concert/concert.component';
import { AddConcertComponent } from './add-concert/add-concert.component';
import { FormsModule } from '@angular/forms';
import { UpdateConcertComponent } from './update-concert/update-concert.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ConcertsComponent,
    AddConcertComponent,
    UpdateConcertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
