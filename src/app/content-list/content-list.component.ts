import { MovieServiceService } from './../movie-service.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../helper-files/movie';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  movieCard = "movieCard";
  genres = ["Biography", "Mindset", "Fantasy"];
  enteredValueExist = false;
  enteredValueNotExist = false;



  // list of books with details
  gadgets:Movie[] = []


  constructor(private movieServiceService:MovieServiceService) { }

  ngOnInit(): void {
    this.movieServiceService.getContentList()
    .subscribe(response => this.gadgets = response)
    // console.log("gadgets length", this.gadgets.length)
  }



  searchAvailability(text:any){
    this.enteredValueExist = false;
    this.enteredValueNotExist = false;
    console.log("input value", text);
  //   let value = this.gadgets.filter((a:any)=>{
  //     // return a.Name.toLowerCase().includes(text.toLowerCase());
  //   })
  //   console.log("value", value);
  //   value ? this.enteredValueExist = true : this.enteredValueNotExist = true;
  }

}
