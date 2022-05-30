import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EnvironmentService } from './services/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'esigi-portal';
  showMenu = true;

  constructor(
    private environmentService: EnvironmentService,
    public translateService: TranslateService
  ) {
    translateService.addLangs(['en-US', 'pt-BR']);
  }
  ngOnInit(): void {
    this.translateService.setDefaultLang('pt-BR');
    this.translateService.use('pt-BR');
    this.environmentService.showMenu.subscribe((res) => {
  
      this.showMenu = res;
    });
  }
}
