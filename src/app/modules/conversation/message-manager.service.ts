import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root',
})
export class MessageManagerService {
  public messagesSubject$: Subject<Message> = new Subject<Message>();

  private messages: Array<Message> = [
    { content: 'Hi!', isBlue: false },
    { content: 'My name is Michał Kamiński', isBlue: false },
    { content: 'I am a novice front-end developer', isBlue: false },
    { content: 'Welcome to my portfolio page!', isBlue: false },
    { content: 'I will tell you a few things about myself', isBlue: false },
    {
      content:
        'If you forget anything, feel free to check info section in top right corner!',
      isBlue: false,
    },
  ];

  public runMessages(): void {
    let time: number = 2000;

    for (let i: number = 0; i < this.messages.length; i++) {
      time += this.messages[i].content.length * 120;
      setTimeout(
        (): void => {
          this.sendMessage(i);
        },
        (this.messages[i].content.length * 120) / 2 + time,
      );
    }
  }

  private sendMessage(id: number): void {
    this.messagesSubject$.next(this.messages[id]);
  }
}
