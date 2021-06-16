import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Import all material components
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {ClipboardModule} from '@angular/cdk/clipboard';

import { CallInfoDialogComponent } from './components/callinfo-dialog/callinfo-dialog.component';
import { CallService } from './services/angular-peer-js-call.service';

@NgModule({
  declarations: [
    AppComponent,
    CallInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    FormsModule,

    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,

    ClipboardModule,
  ],
  providers: [CallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
