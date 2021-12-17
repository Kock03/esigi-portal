import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BannerComponent } from './banner.component';

@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  entryComponents: [],
  exports: [BannerComponent],
})
export class BannerModule {}
