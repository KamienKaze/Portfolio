import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ConversationModule } from './modules/conversation/conversation.module';
import { InfoModule } from './modules/info/info.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ConversationModule,
    InfoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
