import { Component } from '@angular/core';
import { MessageManagerService } from '../message-manager.service';

@Component({
  selector: 'app-conversation-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent {
  public githubLogoSrc: string = 'assets/icons/icons.svg#github';
  public linkedinLogoSrc: string = 'assets/icons/icons.svg#linkedin';
  public sendLogoSrc: string = 'assets/icons/icons.svg#send';

  public messageToSend: string = '';

  public messages: Array<string> = [];

  public onSendClick(): void {
    if (this.messageToSend != '') {
      this.messages.push(this.messageToSend);
      this.messageToSend = '';
    }
  }

  constructor(private messageManager: MessageManagerService) {
    messageManager.messagesSubject$.subscribe((message: string): void => {
      this.messages.push(message);
      console.log(message);
    });

    messageManager.runMessages();
  }
}
