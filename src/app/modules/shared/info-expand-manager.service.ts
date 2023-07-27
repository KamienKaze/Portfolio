import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoExpandManagerService {
  public isInfoExpanded: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public changeInfoState(): void {
    this.isInfoExpanded.next(!this.isInfoExpanded);
  }
}
