import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isInfoExpanded: boolean = false;

  public updateIsInfoExpanded(event: boolean): void {
    this.isInfoExpanded = event;
    console.log(event);
  }
}
