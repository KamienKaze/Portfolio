import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root',
})
export class MessageManagerService {
  public messagesSubject$: Subject<Message> = new Subject<Message>();

  private messages: Array<string> = [
    'Hi!',
    'My name is Michał Kamiński',
    'I am a novice front-end developer',
    'Welcome to my portfolio page!',
    'I will tell you a few things about myself',
    'If you do not have time for animations, feel free to check info section in top right corner!',
  ];

  public runMessages(): void {
    let time: number = 2000;

    for (let i: number = 0; i < this.messages.length; i++) {
      time += this.messages[i].length * 50;
      setTimeout(
        (): void => {
          this.sendMessage(i);
        },
        (this.messages[i].length * 50) / 2 + time,
      );
    }
  }

  private sendMessage(id: number): void {
    this.messagesSubject$.next({ content: this.messages[id], isBlue: false });
  }
}
