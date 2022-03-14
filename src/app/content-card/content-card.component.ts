import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredValueExist = false;
  enteredValueNotExist = false;

  searchAvailability(text:any){
    this.enteredValueExist = false;
    this.enteredValueNotExist = false;
    console.log("input value", text);
    let value = this.gadgets.filter((a:any)=>{
      // return a.Name.toLowerCase().includes(text.toLowerCase());  
    })
    console.log("value", value);
    value ? this.enteredValueExist = true : this.enteredValueNotExist = true;
  }

}
