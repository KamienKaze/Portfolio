import { Component } from '@angular/core';
import { InfoExpandManagerService } from '../../shared/info-expand-manager.service';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss'],
})
export class InfoSectionComponent {
  public githubLogoSrc: string = 'assets/icons/icons.svg#github';
  public linkedinLogoSrc: string = 'assets/icons/icons.svg#linkedin';
  public facebookLogoSrc: string = 'assets/icons/icons.svg#facebook';
  public backLogoSrc: string = 'assets/icons/icons.svg#back';

  public changeInfoState(): void {
    this.infoExpandManager.changeInfoState();
  }

  constructor(private infoExpandManager: InfoExpandManagerService) {}
}
