import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSectionComponent } from './info-section/info-section.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [InfoSectionComponent, DropdownComponent],
  exports: [InfoSectionComponent],
  imports: [CommonModule],
})
export class InfoModule {}
