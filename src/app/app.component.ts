import { Component } from '@angular/core';
import { InfoExpandManagerService } from './modules/shared/info-expand-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isInfoExpanded: boolean = false;

  constructor(private infoExpandManager: InfoExpandManagerService) {
    infoExpandManager.isInfoExpanded.subscribe(
      (isInfoExpanded: boolean): void => {
        this.isInfoExpanded = isInfoExpanded;
        console.log(isInfoExpanded);
      },
    );
  }
}
