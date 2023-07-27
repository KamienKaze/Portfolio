import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './conversation-window/window.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [WindowComponent, MessageComponent],
  exports: [WindowComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class ConversationModule {}
