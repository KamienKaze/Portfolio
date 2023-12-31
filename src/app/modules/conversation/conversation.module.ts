import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './conversation-window/window.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { TypingPopupComponent } from './typing-popup/typing-popup.component';
import { InfoModule } from '../info/info.module';

@NgModule({
  declarations: [WindowComponent, MessageComponent, TypingPopupComponent],
  exports: [WindowComponent],
  imports: [CommonModule, SharedModule, FormsModule, InfoModule],
})
export class ConversationModule {}
