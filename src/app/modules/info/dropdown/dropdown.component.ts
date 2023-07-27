import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input('text') public text: string = '';
  public arrowIconSrc: string = 'assets/icons/icons.svg#arrow';
}
