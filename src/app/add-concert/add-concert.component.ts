import { Component } from '@angular/core';
import { Concert } from '../model/concert.model'; 
import { ConcertService } from '../services/concert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-concert', 
  templateUrl: './add-concert.component.html',
  styleUrls: ['./add-concert.component.css'], 
})
export class AddConcertComponent { 
  newConcert = new Concert(); 

  message!: string;

  constructor(private concertService: ConcertService , private router: Router) { 
  }

  addConcert() {
    this.concertService.ajouterConcert(this.newConcert);
    this.message = "Concert " + this.newConcert.nomConcert + " ajouter avec succes";
    this.router.navigate(['concerts']);
  }
}
