import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoExpandManagerService {
  public isInfoExpanded: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private isInfoExpandedState: boolean = false;

  public changeInfoState(): void {
    this.isInfoExpandedState = !this.isInfoExpandedState;
    this.isInfoExpanded.next(this.isInfoExpandedState);
  }
}
