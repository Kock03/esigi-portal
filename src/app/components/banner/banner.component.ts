import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input('message') message: string = '';
  @Input('showBanner') showBanner!: boolean;
  @Output('handleCheck') handleCheck: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  };

  hideBanner(): void {
    this.handleCheck.next(true);
  }

}