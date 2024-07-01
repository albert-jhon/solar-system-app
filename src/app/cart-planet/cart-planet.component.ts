import { Component, Input } from '@angular/core';
import { Planet } from '../interfaces/Planet';

@Component({
  selector: 'app-cart-planet',
  templateUrl: './cart-planet.component.html',
  styleUrls: ['./cart-planet.component.css'],
})
export class CartPlanetComponent {
  @Input() planet!: Planet;
}
