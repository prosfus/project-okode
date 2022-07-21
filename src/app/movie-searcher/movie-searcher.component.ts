import { Component, OnInit } from '@angular/core';
import { SearcherService } from './movie-searcher.service';

@Component({
  selector: 'app-movie-searcher',
  templateUrl: './movie-searcher.component.html',
  styleUrls: ['./movie-searcher.component.css']
})

export class MovieSearcherComponent implements OnInit {

  pages:boolean = false;
  totalPages:number = 0;
  page:number = 1;
  data:Movie[] = [];
  title:string = '';
  titleValue:string = '';
  noresults: boolean = false;
  constructor(private searcherService: SearcherService) { }

  ngOnInit(): void {
  }

  testingNew(title:string){
    console.log(title);
    
  }

  incPage(){
    this.page = this.page + 1;
    this.handlePage();
  }
  decPage(){
    this.page = this.page - 1;
    this.handlePage()
  }

  handleSearch(title:string) {
    this.searcherService.getMovies(title, 1).subscribe((data)=>{
      if(data.Response === 'False'){
        this.data = [];
        this.totalPages = 0;
        this.pages = false;
        this.noresults = true
      } else {
        this.noresults = false;
        this.page = 1;
        this.title = title;
        this.data = data.Search;
        console.log(data);
        if(data.totalResults > 10){
          this.pages = true;
          this.totalPages = Math.floor(data.totalResults/10);
        }
      }
      
    })
  }
  handlePage(){
    this.searcherService.getMovies(this.title, this.page).subscribe((data)=>{
      this.data = data.Search;
    })
  }

}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
