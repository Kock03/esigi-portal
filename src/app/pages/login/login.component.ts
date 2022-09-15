import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IProfile } from 'src/app/interfaces/iprofile';
import { EnvironmentService } from 'src/app/services/environment.service';
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
  activeMenu!: '';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
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
    private router: Router,
    private environmentService: EnvironmentService,
    public translateService: TranslateService,
  ) {
    this.environmentService.setShowMenu(false);
  }

  ngOnInit(): void {
    // this.showTollbar = false;
    localStorage.clear();
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


  handleBanner(event: any): void {
    this.message = '';
    this.showBanner = false;
  }

  buttonClick(){
    this.loginForm.controls['email'].markAsTouched();
    this.loginForm.controls['password'].markAsTouched();
  }

  async onSubmit(): Promise<void> {
    if(this.loginForm.valid){

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
          this.router.navigate(['/portal']);
  
        }
        if (auth.profiles) {
          localStorage.setItem('profiles', JSON.stringify(auth.profiles));
  
        }
      } catch (error) {
        console.log('ERROR 132' + error);
        this.showBanner = true;
        this.message = 'Ops!E-mail e/ou senha inválidos.Tente novamente.';
      }
    }
    }

}
