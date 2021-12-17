import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  public get fb(): FormBuilder {
    return this._fb;
  }
  public set fb(value: FormBuilder) {
    this._fb = value;
  }
  tabIndex = 0;
  loginForm!: FormGroup;
  message!: string;
  showBanner: boolean = true;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(6),
        ],
      ],
    });
    this.handleLogin()
  }

  checkMethod(event: any) {
    console.log(
      '🚀 ~ file: login.component.ts ~ line 17 ~ LoginComponent ~ checkMethod ~ event',
      event
    );
  }

  handleLogin() {
    const data = this.loginForm.getRawValue();
    let error = true;

    if (error) {
      this.showBanner = true;
      this.message = 'Ops!E-mail e/ou senha inválidos.Tente novamente.';
    }

    console.log(
      '🚀 ~ file: login.component.ts ~ line 30 ~ LoginComponent ~ handleLogin ~ data',
      data
    );
  }

  handleBanner(event: any) {
    console.log(
      '🚀 ~ file: login.component.ts ~ line 53 ~ LoginComponent ~ handleBanner ~ event',
      event
    );
    this.message = '';
    this.showBanner = false;
  }
}
