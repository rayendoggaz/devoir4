import { Injectable } from '@angular/core';
import { Concert } from '../model/concert.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  concerts: Concert[];

  constructor() {
    this.concerts = [
      { idConcert: 1, nomConcert: "THE ERAS TOUR", prixConcert: 300.50, dateCreation: new Date("01/14/2022") }, 
      { idConcert: 2, nomConcert: "GUTS TOUR", prixConcert: 450.25, dateCreation: new Date("12/17/2021") },
      { idConcert: 3, nomConcert: "SOUR TOUR", prixConcert: 900.75, dateCreation: new Date("02/20/2020") }
    ];
  }

  listerConcerts(): Concert[] { 
    return this.concerts;
  }

  ajouterConcert(concert: Concert) { 
    this.concerts.push(concert);
  }

  supprimerConcert(concert: Concert) { 
    const index = this.concerts.indexOf(concert, 0);
    if (index > -1) {
      this.concerts.splice(index, 1);
    }
  }

  consulterConcert(id: number): Concert {
    return this.concerts.find(c => c.idConcert === id)!;
  }

  trierConcerts() { 
    this.concerts = this.concerts.sort((c1, c2) => {
      if (c1.idConcert > c2.idConcert) {
        return 1;
      }
      if (c1.idConcert < c2.idConcert) {
        return -1;
      }
      return 0;
    });
  }

  updateConcert(concert: Concert) { 
    this.supprimerConcert(concert);
    this.ajouterConcert(concert);
    this.trierConcerts();
  }
}
