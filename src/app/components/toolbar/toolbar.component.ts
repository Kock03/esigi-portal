import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent implements OnInit {
  @Input('showMenu') showMenu!: boolean;
  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  logout(): void {
    this.userService.logout();
  }

  openApp(): void {
    location.replace(`http://192.168.8.184:3404/edit/novo`);
  }
}
