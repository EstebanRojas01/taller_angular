import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListComponent } from './series-list/series-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    SerieListComponent  // Se importa aquí en lugar de declararlo
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  exports: [
    SerieListComponent  // Si necesitas usarlo en otros módulos
  ]
})
export class SeriesModule { }