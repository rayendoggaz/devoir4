import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConcertsComponent } from './concert.component'; 

describe('ConcertsComponent', () => { 
  let component: ConcertsComponent; 
  let fixture: ComponentFixture<ConcertsComponent>; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcertsComponent] 
    });
    fixture = TestBed.createComponent(ConcertsComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
