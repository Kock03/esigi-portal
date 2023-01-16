import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGateway } from 'src/api-gateway';

const apiVersion = 'auth/api/v1';

@Injectable({
  providedIn: 'root',
})
export class ProfilesPorvider {
  constructor(private apiGateway: ApiGateway) {}

  ngOnInit(): void {}

  getProfileList(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .get('profile')
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
          // this.snackBar.successMessage(response.body.message);
        }, reject);
    });
  }

  getProfile(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .get('profile', { id: id })
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
          // this.snackBar.successMessage(response.body.message);
        }, reject);
    });
  }

  findProfile(query: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .get(`profile/find?${query}`)
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
          // this.snackBar.successMessage(response.body.message);
        }, reject);
    });
  }

  findAuthor(query: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .get(`profile/findAuthor?${query}`)
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
          // this.snackBar.successMessage(response.body.message);
        }, reject);
    });
  }

  validateRegister(profileDetail: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .post('profile', profileDetail)
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
          // this.snackBar.successMessage(response.body.message);
        }, reject);
    });
  }

  editDomain(profileDetail: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .put('profile', profileDetail)
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
          // this.snackBar.successMessage(response.body.message);
        }, reject);
    });
  }

  saveDomain(profileDetail: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .post('profile', profileDetail)
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
          // this.snackBar.successMessage(response.body.message);
        }, reject);
    });
  }

  whoIs(name: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiGateway
        .post('profile', { domain: name })
        .subscribe((response: HttpResponse<any>) => {
          resolve(response.body);
          // this.snackBar.successMessage(response.body.message);
        }, reject);
    });
  }
}
