import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from 'src/app/services/environment.service';
import { IProfile } from 'src/app/interfaces/iprofile'
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {
  profiles!: IProfile[]

  constructor(private environmentService: EnvironmentService,  private _location: Location, public translateService: TranslateService,) {
    this.environmentService.setShowMenu(true);
   }

  ngOnInit(): void {
   this.getProfile()
  }

 getProfile(){
     this.profiles =  JSON.parse(localStorage.getItem('profiles')!);
    console.log(this.profiles[0].name);
  }

  openApp(port: number): void {
    location.replace(`http://localhost:${port}`);
  }

}
