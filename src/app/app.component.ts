import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'esigi-portal';
  showMenu = true;

ngOnInit(): void {
  console.log("🚀 ~ file: app.component.ts ~ line 15 ~ AppComponent ~ ngOnInit ~ location", location)
  if(location.pathname === '/login')
  {
    this.showMenu = false;
  }
}

}
