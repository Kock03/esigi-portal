import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginComponent } from './pages/login/login.component';
import { PortalComponent } from './pages/portal/portal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BannerModule } from './components/banner/banner.module';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortalComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    BannerModule,
    MatButtonModule,
    FormsModule,
    MatDividerModule,
    HttpClientModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
