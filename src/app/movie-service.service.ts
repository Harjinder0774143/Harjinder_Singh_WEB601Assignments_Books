import { MessageService } from './message.service';
import { Movie } from '../helper-files/movie';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GADGETS } from '../helper-files/contentDb';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor( public messageService:MessageService) { }
  getContentList(): Observable<Movie[]>{
      this.messageService.add("Content array loaded!")
      return of(GADGETS);
  }

  getContent(id:number):Observable<Movie>{
    var movie = <Movie>{};
    movie = <Movie> GADGETS.find(o => o.id == id);
    this.messageService.add(`Content Item at id:
    ${movie.id}`)
    return of(movie);
  }
}
