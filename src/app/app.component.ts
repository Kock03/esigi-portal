import { Component } from '@angular/core';
import { EnvironmentService } from './services/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'esigi-portal';
  showMenu = true;

  constructor(private environmentService: EnvironmentService) {}
  ngOnInit(): void {
    this.environmentService.showMenu.subscribe((res) => {
      console.log("🚀 ~ file: app.component.ts ~ line 16 ~ AppComponent ~ this.environmentService.showMenu.subscribe ~ res", res)
      this.showMenu = res;
    });
  }
}
