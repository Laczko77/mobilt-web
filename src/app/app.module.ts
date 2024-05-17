import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { LoginComponent } from './pages/login/login/login.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { MarketComponent } from './pages/market/market/market.component';
import { CartComponent } from './pages/cart/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({"projectId":"mobiltweb-32764","appId":"1:823367235461:web:9c38f4ae9bfcfb863736ec","storageBucket":"mobiltweb-32764.appspot.com","apiKey":"AIzaSyDBrniPnVzqSJqFYvtZVWW1565_Eq5otHg","authDomain":"mobiltweb-32764.firebaseapp.com","messagingSenderId":"823367235461","measurementId":"G-Q58HHNNTRR"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
