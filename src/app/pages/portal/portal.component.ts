import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from 'src/app/services/environment.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(private environmentService: EnvironmentService) {
    this.environmentService.setShowMenu(true);
   }

  ngOnInit(): void {
  }

  openApp(port: number): void {
    location.replace(`http://localhost:${port}`);
  }

}
