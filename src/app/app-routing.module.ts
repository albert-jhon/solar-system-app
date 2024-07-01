import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { SystemSolarComponent } from './system-solar/system-solar.component';

const appRoutes: Routes = [
  { path: 'planets', component: PlanetsComponent },
  { path: 'system-solar', component: SystemSolarComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
