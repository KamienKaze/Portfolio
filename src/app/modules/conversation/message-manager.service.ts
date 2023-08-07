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
    "Let's get started!",
    'My adventure with coding started in elementary school',
    'As far as I remember I was dreaming about creating games',
    'In 6th grade I discovered RPG Maker',
    'Instantly I knew that it is something that i want to do for a living',
    'After 5 or 6 years playing with RPG Maker I went to technical school to learn how to code more professionally',
    'Through my education I found out that creating any applications is as enjoyable as creating games',
    'I was writing mobile apps with android studio, desktop apps with .NET and much more',
    'The most satisfaction and joy I got from writing webapps though',
    'especially when I discovered Angular...',
    'From then my goal is to work as front-end developer',
    'For now I have only 2 projects finished',
    'One of them is this portfolio, that you are reading',
    'Second one is the "Spothiefy"',
    'It is a copy of Spotify music player',
    'In retrospection of time I see a lot of mistakes in this project',
    'If I would have to write this again I would have done bunch of things different',
    'You can check out this project at this link "https://kamienkaze.github.io/Spothiefy-desktop/home"',
    'All of the code is of course accessible at my GitHub account',
    'You can check it by clicking GitHub icon in bottom-left corner or in previously mentioned info section!',
    'If you are interested in hiring me or giving me any advice write me at "michalkaminski.kamienkaze@gmail.com"',
    "That's all from me by now",
    'Thanks for reading this, bye!',
  ];

  public runMessages(): void {
    let time: number = 2000;

    for (let i: number = 0; i < this.messages.length; i++) {
      time += this.messages[i].length * 50;
      setTimeout((): void => {
        this.sendMessage(i);
      }, time);
    }
  }

  private sendMessage(id: number): void {
    this.messagesSubject$.next({ content: this.messages[id], isBlue: false });
  }
}
