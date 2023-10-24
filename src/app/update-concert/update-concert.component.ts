import { Component } from '@angular/core';
import { ConcertService } from '../services/concert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Concert } from '../model/concert.model';

@Component({
  selector: 'app-update-concert',
  templateUrl: './update-concert.component.html',
  styleUrls: []
})
export class UpdateConcertComponent {

  currentConcert = new Concert();

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private concertService: ConcertService) { }

  ngOnInit() {
    this.currentConcert = this.concertService.consulterConcert(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentConcert);
  }

  updateConcert() {
    this.concertService.updateConcert(this.currentConcert);
    this.router.navigate(['concerts']);
  }
}
