import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiGateway } from 'src/api-gateway';

const apiVersion = 'auth/api/v1';

@Injectable({
  providedIn: 'root',
})
export class UsersProvider {
  constructor(private apiGateway: ApiGateway) {}

  ngOnInit(): void {}

  getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
        this.apiGateway.get('users').subscribe((response: HttpResponse<any>) => {
            resolve(response.body);
            // this.snackBar.successMessage(response.body.message);
        }, reject);
    });
}

getUserDetails(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
        this.apiGateway.get(apiVersion + 'user/detail/:id', {id: id}).subscribe((response: HttpResponse<any>) => {
            resolve(response.body);
            // this.snackBar.successMessage(response.body.message);
        }, reject);
    });
}
}
