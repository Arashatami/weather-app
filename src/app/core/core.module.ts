import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxTranslateModule } from '../shared/translate/translate.module';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxTranslateModule
  ],
  exports: [
    LayoutComponent,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxTranslateModule
  ]
})
export class CoreModule { }
