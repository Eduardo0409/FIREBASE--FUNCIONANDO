import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './auth.service';
import { IndexComponent } from './index/index.component';
import { FirelistComponent } from './firelist/firelist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: IndexComponent},
      {path: 'firelist', component: FirelistComponent}
    ]),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAFCK5HwjbbMqNsibDR3i0FAw3bIOLEWSg",
      authDomain: "angularlist-36a5c.firebaseapp.com",
      databaseURL: "https://angularlist-36a5c-default-rtdb.firebaseio.com",
      projectId: "angularlist-36a5c",
      storageBucket: "angularlist-36a5c.appspot.com",
      messagingSenderId: "596198204821",
      appId: "1:596198204821:web:43639963e28877f31f029c",
      measurementId: "G-C2VMZK0Y0K"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    IndexComponent,
    FirelistComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
