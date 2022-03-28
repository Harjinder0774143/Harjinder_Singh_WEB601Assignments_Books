import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css'],
})
export class ContentCardComponent implements OnInit {
  @Input() getGadget?: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.getGadget);
  }

  enteredValueExist = false;
  enteredValueNotExist = false;

  searchAvailability(text: any) {
    this.enteredValueExist = false;
    this.enteredValueNotExist = false;
    console.log('input value', text);
    // let value = this.gadgets.filter((a:any)=>{
    //   // return a.Name.toLowerCase().includes(text.toLowerCase());
    // })
    // console.log("value", value);
    // value ? this.enteredValueExist = true : this.enteredValueNotExist = true;
  }
}
