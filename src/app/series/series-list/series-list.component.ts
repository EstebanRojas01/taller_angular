import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieService } from '../series.service';
import { Serie } from '../series';

@Component({
  selector: 'app-serie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SerieListComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;
  selectedSerie: Serie | null = null;
  

  constructor(
    private readonly serieService: SerieService,
  ) {}

  ngOnInit(): void {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
      this.averageSeasons = this.calculateAverage();
    });
  }

  calculateAverage(): number {
    let totalSeasons = 0;
    this.series.forEach(serie => totalSeasons += serie.seasons);
    return this.series.length ? totalSeasons / this.series.length : 0;
  }

  toggleDetails(index: number): void {
    this.selectedSerie = this.series[index];
    console.log(this.selectedSerie)
  }

}
