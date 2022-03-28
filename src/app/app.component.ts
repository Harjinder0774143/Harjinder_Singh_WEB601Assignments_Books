import { Movie } from '../helper-files/movie';
import { MovieServiceService } from './movie-service.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'color';
  searach = 1;
  findElement:Movie= <Movie>{}
  searchBar=""
  error=""


  constructor(private movieServiceService:MovieServiceService) { }
  ngOnInit():void{
    this.movieServiceService.getContent(this.searach)
    .subscribe(response=>this.findElement = response);
  }


  search(value: string, e:any)
  {
    this.error="";
    if(!Number.isNaN(value))
    {
      this.searach = parseInt(value)
      this.movieServiceService.getContent(this.searach)
    .subscribe(response=>this.findElement = response,
      error=>{
        this.error="Somting Wen Wrong";
      });
    }
    else
    {
      this.error="Enter Proper Number";
    }
  }
}
