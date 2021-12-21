import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGateway } from 'src/api-gateway';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiGateway: ApiGateway) {}

  ngOnInit(): void {}

  login(credentials: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .post('auth/login', credentials)
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
          // this.snackBar.successMessage(response.body.message);
        }, reject);
    });
  }

  getCSRF(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway.get('tokenCSRF').subscribe((response: any) => {
        resolve(response.body);
        // this.snackBar.successMessage(response.body.message);
      }, reject);
    });
  }

  ngOnDestroy(): void {}
}
