import { Component, ElementRef, ViewChild } from '@angular/core';
import { MessageManagerService } from '../message-manager.service';
import { Message } from '../message';

@Component({
  selector: 'app-conversation-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  public githubLogoSrc: string = 'assets/icons/icons.svg#github';
  public linkedinLogoSrc: string = 'assets/icons/icons.svg#linkedin';
  public sendLogoSrc: string = 'assets/icons/icons.svg#send';

  public messageToSend: string = '';
  public isSending: boolean = false;

  public messages: Array<Message> = [];

  public onSendClick(): void {
    if (this.messageToSend != '') {
      this.messages.push({ content: this.messageToSend, isBlue: true });
      this.messageToSend = '';
      this.scrollToBottom();
    }
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
        this.myScrollContainer.nativeElement.scrollTop =
          this.myScrollContainer.nativeElement.scrollHeight;
      } catch (err) {}
    });
  }

  constructor(private messageManager: MessageManagerService) {
    this.showTypingPopup();

    messageManager.messagesSubject$.subscribe((message: Message): void => {
      this.messages.push(message);
      this.isSending = false;
      this.showTypingPopup();
      this.scrollToBottom();
    });

    messageManager.runMessages();
  }
}
