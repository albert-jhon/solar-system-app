import { Component, OnInit } from '@angular/core';
import { PlanetsServiceService } from '../planets-service.service';
import { Planet } from '../interfaces/Planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent implements OnInit {
  public Planets: Planet[] = [];

  constructor(private planetsServiceService: PlanetsServiceService) {}

  public ngOnInit(): void {
    this.GetPlanets();
  }

  private GetPlanets(): void {
    this.Planets = this.planetsServiceService.GetPlanets();
  }
}
