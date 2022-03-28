import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PipelistPipe } from './pipelist.pipe';
import { HighlightDirective } from './highlight.directive';

import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { HoverAffectDirective } from './hover-affect.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
@NgModule({
  declarations: [
    AppComponent,
    PipelistPipe,
    HighlightDirective,
    ContentListComponent,
    ContentCardComponent,
    HoverAffectDirective,
    AppMessagesComponent,
    ModifyContentComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false,
    }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
