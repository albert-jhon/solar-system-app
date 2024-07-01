import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPlanetComponent } from './cart-planet.component';

describe('CartPlanetComponent', () => {
  let component: CartPlanetComponent;
  let fixture: ComponentFixture<CartPlanetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartPlanetComponent]
    });
    fixture = TestBed.createComponent(CartPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
