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

  loading = true;
  details!: Details;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private searchService: SearcherService
  ) { }

  ngOnInit(): void {
    let id = String(this.route.snapshot.paramMap.get('id'));
    this.searchService.getMovie(id).subscribe((data)=>{
      
      this.details = {
        id: id,
        poster: data.Poster,
        date: data.Released,
        idioma: data.Language,
        plot: data.Plot,
        title: data.Title,
        director: data.Director,
        genre: data.Genre,
        metascore: data.Metascore,
        color: data.Metascore < 6 ? 'yellow' : 'green',
        duration: data.Runtime,

      }
      this.loading = false;
      
    })
  }

}

interface Details {
  id: string;
  poster: string
  title: string;
  date: string;
  idioma: string;
  plot: string;
  director: string;
  genre: string;
  metascore: number;
  color: string;
  duration: string;
}




