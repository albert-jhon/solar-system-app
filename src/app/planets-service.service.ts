import { Injectable } from '@angular/core';
import { Planet } from './interfaces/Planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetsServiceService {
  private planets: Planet[] = [
    {
      name: 'Mercurio',
      history:
        'Conocido desde la antigüedad, Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar.',
      orbitDistanceAU: 0.39,
      orbitalPeriodDays: 88,
      imageUrl: 'https://i.ibb.co/h1ZNh4c/Mercurio.webp',
    },
    {
      name: 'Venus',
      history:
        'Nombrado por la diosa romana del amor y la belleza, Venus es el planeta más caliente debido a su atmósfera densa.',
      orbitDistanceAU: 0.72,
      orbitalPeriodDays: 225,
      imageUrl: 'https://i.ibb.co/KWWSMtq/Venus.png',
    },
    {
      name: 'Tierra',
      history:
        'Nuestro hogar, la Tierra es el único planeta conocido que alberga vida.',
      orbitDistanceAU: 1,
      orbitalPeriodDays: 365.25,
      imageUrl: 'https://i.ibb.co/5rpYZbF/earth-PNG15.png',
    },
    {
      name: 'Marte',
      history:
        'Conocido como el "Planeta Rojo" debido a su color oxidado, Marte ha sido objeto de exploración en busca de vida.',
      orbitDistanceAU: 1.52,
      orbitalPeriodDays: 687,
      imageUrl: 'https://i.ibb.co/gb2c2tR/Marte.png',
    },
    {
      name: 'Júpiter',
      history:
        'Nombrado por el rey de los dioses romanos, Júpiter es el planeta más grande del sistema solar.',
      orbitDistanceAU: 5.2,
      orbitalPeriodDays: 4331,
      imageUrl: 'https://i.ibb.co/d4CMcFN/J-piter.webp',
    },
    {
      name: 'Saturno',
      history:
        'Conocido por sus impresionantes anillos, Saturno es el segundo planeta más grande y es visible a simple vista.',
      orbitDistanceAU: 9.58,
      orbitalPeriodDays: 10759,
      imageUrl: 'https://i.ibb.co/mvrfqwV/Saturno.png',
    },
    {
      name: 'Urano',
      history:
        'Descubierto en 1781 por William Herschel, Urano es notable por su inclinación extrema, casi en su lado.',
      orbitDistanceAU: 19.22,
      orbitalPeriodDays: 30688,
      imageUrl: 'https://i.ibb.co/2hfYbkC/Urano.png',
    },
    {
      name: 'Neptuno',
      history:
        'Descubierto en 1846, Neptuno es conocido por sus fuertes vientos y tormentas violentas.',
      orbitDistanceAU: 30.05,
      orbitalPeriodDays: 60190,
      imageUrl: 'https://i.ibb.co/LNSPnPn/Neptuno.png',
    },
  ];
  constructor() {}

  public GetPlanets() {
    if (!this.planets) return [];
    return this.planets;
  }
  public getPlanetByName(name: string): Planet {
    return (
      this.planets.find(
        (planet) =>
          planet.name.toLocaleLowerCase().trim() ===
          name.toLocaleLowerCase().trim()
      ) || this.planets[2]
    );
  }
}
