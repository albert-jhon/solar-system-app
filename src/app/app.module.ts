import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { SystemSolarComponent } from './system-solar/system-solar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { CartPlanetComponent } from './cart-planet/cart-planet.component';
import { PlanetsServiceService } from './planets-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    SystemSolarComponent,
    NavigationComponent,
    CartPlanetComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [PlanetsServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
