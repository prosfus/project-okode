import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SearcherService } from '../movie-searcher/movie-searcher.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: string = '';
  poster: string = ''
  title: string = '';
  date: string = '';
  idioma: string = '';
  plot: string = '';
  director: string = '';
  genre: string = '';
  metascore: number = 0;
  color: string = '';
  duration: string = '';
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private searchService: SearcherService
  ) { }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.searchService.getMovie(this.id).subscribe((data)=>{
      this.poster = data.Poster;
      this.date = data.Released;
      this.idioma = data.Language;
      this.plot = data.Plot;
      this.title = data.Title;
      this.director = data.Director;
      this.genre = data.Genre;
      this.metascore = data.Metascore;
      this.duration = data.Runtime;
      if(data.Metascore < 6){
        this.color = 'yellow'
      } else {
        this.color = 'green'
      }
      console.log(data);
      
    })
  }

}
