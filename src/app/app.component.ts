import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EnvironmentService } from './services/environment.service';
import { UserService } from './services/user.service';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeMenu!: '';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title = 'esigi-portal';
  showMenu = true;

  collaboratorId!: string | null;
  openTree: boolean = false;
  compare!: any

  collaborator: string = 'colaborador';
  jobs: string = 'vaga';
  resume: string = 'curriculo';
  portal: string = 'login'

  constructor(
    private observer: BreakpointObserver,
    private environmentService: EnvironmentService,
    public translateService: TranslateService,
    private userService: UserService,
    private router: Router,
  ) {
    translateService.addLangs(['en-US', 'pt-BR']);
  }
  ngOnInit(): void {
    // if(this.router.url === '/login'){

    //   this.sidenav.close();
    // }
    this.translateService.setDefaultLang('pt-BR');
    this.translateService.use('pt-BR');
    this.environmentService.showMenu.subscribe((res) => {
  
      this.showMenu = res;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.observer.observe(['(max-width: 800px)']).subscribe((res: any) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      }
      );
    }, 50);
  }

  recize() {

    this.openTree = this.openTree === true ? false : true;
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  openApp(port: number): void {
    location.replace(`http://localhost:${port}`);
  }


  navigator(route: any) {
    console.log("🚀 ~ file: app.component.ts ~ line 79 ~ AppComponent ~ navigator ~ route", route)
    switch (route) {
      case 'colaborador':
        this.router.navigate(['colaborador/lista']);
        break;
      case 'vaga':
        this.router.navigate(['vaga/lista']);
        break;
      case 'curriculo':
        this.router.navigate(['curriculo/lista']); 
        break;
        case 'login':
          this.sidenav.close();
        break;

    }
  }

  logout(): void {
    this.userService.logout();
  }
}
