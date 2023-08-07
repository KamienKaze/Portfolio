import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoExpandManagerService {
  private isInfoExpandedState: boolean = false;

  public isInfoExpanded: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.isInfoExpandedState);

  public changeInfoState(): void {
    this.isInfoExpandedState = !this.isInfoExpandedState;
    this.isInfoExpanded.next(this.isInfoExpandedState);
  }
}
