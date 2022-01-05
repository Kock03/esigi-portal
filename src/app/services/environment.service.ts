import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private envCurrent!: string;
  public showMenu = new Subject<boolean>() ;

  setEnvCurrent(env: string): void {
    this.envCurrent = env;
  }

  getEnvCurrent(): string {
    return this.envCurrent;
  }

  setShowMenu(value: boolean){
    this.showMenu.next(value);
  }

  getShowMenu(): Subject<boolean> {
    return this.showMenu;
  }

  constructor() { }
}