import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/providers/auth.provider';
import { UsersProvider } from 'src/providers/user.provider';
// import { Input} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  // @Input('showTollbar') showTollbar!: boolean;
  form!: FormGroup;
  public get fb(): FormBuilder {
    return this._fb;
  }
  public set fb(value: FormBuilder) {
    this._fb = value;
  }
  tabIndex = 0;
  loginForm!: FormGroup;
  message!: string;
  showBanner: boolean = false;
  users = [];
  isLoading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private http: HttpClient,
    private userProvider: UsersProvider,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.showTollbar = false;
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(6),
        ],
      ],
    });

    const token = localStorage.getItem('token');
    if (token) {
      this.userService.auth(token);
      this.router.navigate(['/portal']);
    }
  }

  checkMethod(event: any) {
    console.log(
      '🚀 ~ file: login.component.ts ~ line 62 ~ LoginComponent ~ checkMethod ~ event',
      event
    );
  }

  // handleTollBar(event: any): void {}: void {
  //   this.showTollbar = false;
  // }

  handleBanner(event: any): void {
    this.message = '';
    this.showBanner = false;
  }

  async onSubmit(): Promise<void> {
    const formData = this.loginForm.getRawValue();
    const data = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const auth = await this.authService.login(data);
      if (auth.token) {
        this.isLoading = true;
        this.userService.auth(auth.token);
        console.log(auth);
      }
    } catch (error) {
      console.log('ERROR 132' + error);
      this.showBanner = true;
      this.message = 'Ops!E-mail e/ou senha inválidos.Tente novamente.';
    }
  }

  async getCSRF(token: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + token);
    const csrf = await this.http
      .get(environment.baseUrl + 'token', { headers: headers })
      .subscribe((response) => {
        console.log(
          '🚀 ~ file: login.component.ts ~ line 135 ~ LoginComponent ~ getCSRF ~ csrf',
          response
        );
      });
    return csrf;
  }
}
