import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSectionComponent } from './info-section/info-section.component';

@NgModule({
  declarations: [InfoSectionComponent],
  exports: [InfoSectionComponent],
  imports: [CommonModule],
})
export class InfoModule {}
