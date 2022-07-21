import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

 
@Injectable()
export class SearcherService {
 
 
  constructor(private http: HttpClient) {
  }
 
  getMovies(title: string, page: number): Observable<any> {
    return this.http.get('http://www.omdbapi.com/?apikey=6e0a257&s='+title+'&type=movie&page='+page)
  }

  getMovie(id: string): Observable<any> {
    return this.http.get('http://www.omdbapi.com/?apikey=6e0a257&i='+id)
  }
 
}