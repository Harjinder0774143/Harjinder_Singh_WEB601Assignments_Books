import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate) {
    if (updates.isEnabled) {interval(6 * 60 * 60).subscribe(() => updates.checkForUpdate()
        .then(() => console.log('checking for updates')));
    }
   }

  public init(){
    this.updates.versionUpdates.subscribe(event => {
    console.log(event)
    switch (event.type) {
    case 'VERSION_DETECTED':
    console.log(`Downloading new app version:${event.version.hash}`);    
    break;
    case 'VERSION_READY':
      this.updates.activateUpdate().then(() =>document.location.reload());
    console.log(`Current app version:${event.currentVersion.hash}`);    
    console.log(`New app version ready for use:${event.latestVersion.hash}`);    
    break;
    } 
  });
    
    }

  
    private promptUser(): void {
      console.log('updating to new version');
      this.updates.versionUpdates.subscribe(event => {
        console.log(event)
        switch (event.type) {
        case 'VERSION_DETECTED':
        console.log(`Downloading new app version:${event.version.hash}`);    
        break;
        case 'VERSION_READY':
          this.updates.activateUpdate().then(() =>document.location.reload());
        console.log(`Current app version:${event.currentVersion.hash}`);    
        console.log(`New app version ready for use:${event.latestVersion.hash}`);    
        break;
        } 
      });  
    }

    public checkForUpdates(): void {
      this.updates.versionUpdates.subscribe(event => this.promptUser());
    }



}
