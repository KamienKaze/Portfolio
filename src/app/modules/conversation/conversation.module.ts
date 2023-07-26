import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './conversation-window/window.component';

@NgModule({
  declarations: [WindowComponent],
  exports: [WindowComponent],
  imports: [CommonModule],
})
export class ConversationModule {}
