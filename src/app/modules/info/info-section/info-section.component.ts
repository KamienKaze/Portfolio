import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss'],
})
export class InfoSectionComponent {
  @Output() isInfoExpanded: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input('isInfoExpanded') public isInfoButtonActive: boolean = false;

  public githubLogoSrc: string = 'assets/icons/icons.svg#github';
  public linkedinLogoSrc: string = 'assets/icons/icons.svg#linkedin';
  public facebookLogoSrc: string = 'assets/icons/icons.svg#facebook';
  public backLogoSrc: string = 'assets/icons/icons.svg#back';

  public changeInfoPanelState(): void {
    this.isInfoButtonActive = !this.isInfoButtonActive;
    this.isInfoExpanded.emit(this.isInfoButtonActive);
  }
}
