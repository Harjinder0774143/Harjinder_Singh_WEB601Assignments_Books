import { Movie } from '../helper-files/movie';
import { MovieServiceService } from './movie-service.service';
import { ApplicationRef, Component,OnInit } from '@angular/core';
import { LogUpdateService } from './log-update.service';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { concat, first, interval } from 'rxjs';

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


  constructor(private movieServiceService:MovieServiceService, private log: LogUpdateService,
    private appRef: ApplicationRef,private updates: SwUpdate,private _snackBar: MatSnackBar) { // check the service worker for updates
      this.updates.checkForUpdate();}
  ngOnInit():void{
    this.movieServiceService.getContent(this.searach)
    .subscribe(response=>this.findElement = response);
    console.log('this.log.init();')
    this.log.init();
    this.log.checkForUpdates();
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
      const everyHour$ = interval(1 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ =
      concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe(
      
      () => this.updates.checkForUpdate());
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
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
