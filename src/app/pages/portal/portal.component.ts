import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EnvironmentService } from 'src/app/services/environment.service';
import { IProfile } from 'src/app/interfaces/iprofile'
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UserService } from 'src/app/services/user.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  profiles!: IProfile[]
  @Input('showMenu') showMenu!: boolean;
  activeMenu!: '';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title = 'esigi-portal';
  // showMenu = true;
  showNav: boolean = true;
  // activeUrl!: any


  collaboratorId!: string | null;
  openTree: boolean = false;
  compare!: any

  customer: string = 'cliente';
  collaborator: string = 'colaborador';
  jobs: string = 'vaga';
  resume: string = 'curriculo';
  portal: string = 'login'

  constructor(private environmentService: EnvironmentService, private _location: Location, public translateService: TranslateService, private router: Router, private observer: BreakpointObserver,
    private userService: UserService,
  ) {
    this.environmentService.setShowMenu(true);
  }

  ngOnInit(): void {
    this.translateService.setDefaultLang('pt-BR');
    this.translateService.use('pt-BR');
    this.environmentService.showMenu.subscribe((res) => {

      this.showMenu = res;
    });
    //  this.getProfile()
  }

  //  getProfile(){
  //      this.profiles =  JSON.parse(localStorage.getItem('profiles')!);
  //     console.log(this.profiles[0].name);
  //   }


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
      case 'cliente':
        this.router.navigate(['cliente/lista']);
        break;
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
