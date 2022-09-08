import { Component, OnInit } from '@angular/core';
import { SearcherService } from './movie-searcher.service';

@Component({
  selector: 'app-movie-searcher',
  templateUrl: './movie-searcher.component.html',
  styleUrls: ['./movie-searcher.component.css']
})

export class MovieSearcherComponent implements OnInit {

  
  data:Movie[] = [];
  title = '';
  titleValue = '';
  
  pageInfo: PageInfo = {
    pages: false,
    totalPages: 0,
    page: 1,
    noresults: false
  }


  constructor(private searcherService: SearcherService) { }

  ngOnInit(): void {
  }


  incPage(){
    this.pageInfo.page = this.pageInfo.page + 1;
    this.handlePage();
  }
  decPage(){
    this.pageInfo.page = this.pageInfo.page - 1;
    this.handlePage()
  }

  handleSearch(title:string) {
    this.searcherService.getMovies(title, 1).subscribe((data)=>{
      if(data.Response === 'False'){
        this.data = [];
        this.pageInfo.totalPages = 0;
        this.pageInfo.pages = false;
        this.pageInfo.noresults = true
      } else {
        this.pageInfo.noresults = false;
        this.pageInfo.page = 1;
        this.title = title;
        this.data = data.Search;
        console.log(data);
        if(data.totalResults > 10){
          this.pageInfo.pages = true;
          this.pageInfo.totalPages = Math.floor(data.totalResults/10);
        }
      }
      
    })
  }
  handlePage(){
    this.searcherService.getMovies(this.title, this.pageInfo.page).subscribe((data)=>{
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

interface PageInfo {
  pages: boolean;
  totalPages: number;
  page: number;
  noresults: boolean;
}
