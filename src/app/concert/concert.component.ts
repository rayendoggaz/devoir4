import { Component } from '@angular/core';
import { Concert } from '../model/concert.model';
import { ConcertService } from '../services/concert.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css'],
})
export class ConcertsComponent {
  concerts: Concert[];

  constructor(private concertService: ConcertService) {
    this.concerts = concertService.listerConcerts();
  }

  supprimerConcert(c: Concert) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.concertService.supprimerConcert(c);
  }
}
