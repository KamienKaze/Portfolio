import { Component, ElementRef, ViewChild } from '@angular/core';
import { MessageManagerService } from '../message-manager.service';
import { Message } from '../message';
import { InfoExpandManagerService } from '../../shared/info-expand-manager.service';

@Component({
  selector: 'app-conversation-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  public githubLogoSrc: string = 'assets/icons/icons.svg#github';
  public linkedinLogoSrc: string = 'assets/icons/icons.svg#linkedin';
  public sendLogoSrc: string = 'assets/icons/icons.svg#send';
  public infoIconSrc: string = 'assets/icons/icons.svg#info';

  public messageToSend: string = '';
  public isSending: boolean = false;
  public isInfoExpanded: boolean = false;

  public messages: Array<Message> = [];

  public time: Date = new Date();

  public onSendClick(): void {
    if (this.messageToSend != '') {
      this.messages.push({ content: this.messageToSend, isBlue: true });
      this.messageToSend = '';
      this.scrollToBottom();
    }
  }

  public changeInfoState(): void {
    this.infoExpandManager.changeInfoState();
  }

  private showTypingPopup(): void {
    setTimeout((): void => {
      this.isSending = true;
      this.scrollToBottom();
    }, 1000);
  }

  private scrollToBottom(): void {
    setTimeout((): void => {
      try {
        this.scrollContainer.nativeElement.scrollTop =
          this.scrollContainer.nativeElement.scrollHeight;
      } catch (err) {}
    });
  }

  constructor(
    private messageManager: MessageManagerService,
    private infoExpandManager: InfoExpandManagerService,
  ) {
    messageManager.messagesSubject$.subscribe((message: Message): void => {
      this.messages.push(message);
      this.isSending = false;
      this.showTypingPopup();
      this.scrollToBottom();
    });

    infoExpandManager.isInfoExpanded.subscribe((isExpanded: boolean): void => {
      this.isInfoExpanded = isExpanded;
    });

    this.showTypingPopup();
    messageManager.runMessages();
  }
}
