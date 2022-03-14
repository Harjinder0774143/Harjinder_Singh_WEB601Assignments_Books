import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.css']
})
export class AppMessagesComponent implements OnInit {

  constructor(public messageService:MessageService) { }

  ngOnInit(): void {
  }


}
