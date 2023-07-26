import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './conversation-window/window.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WindowComponent],
  exports: [WindowComponent],
  imports: [CommonModule, SharedModule],
})
export class ConversationModule {}
