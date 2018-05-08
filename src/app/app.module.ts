import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//Importacion de paginas
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//Autoprovider
//Importacion de social sharing
import { SocialSharing } from '@ionic-native/social-sharing';
//Importacion de pipe/ordenar

//Importacion de AngularFireBase2 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { RegistroPage } from '../pages/registro/registro';
import { ContactoPage } from '../pages/contacto/contacto';
import { EmailComposer } from '@ionic-native/email-composer';
//Implementacion de maps
import { GoogleMaps } from '@ionic-native/google-maps';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from '../store/reducer/reducer';
import { EffectsModule } from '@ngrx/effects';
import { efectos } from '../store/effect/effects';

//Exportacion de AngularFireBase2 Configuracion
export const config = {
  apiKey: "AIzaSyDdiLGK0Bpqxq-VKobt9XzxbxbPItIkDV0",
  authDomain: "mundialrusia-8590d.firebaseapp.com",
  databaseURL: "https://mundialrusia-8590d.firebaseio.com",
  projectId: "mundialrusia-8590d",
  storageBucket: "mundialrusia-8590d.appspot.com",
  messagingSenderId: "669376915713"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    ContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StoreModule.forRoot({ cosaStore: reducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([efectos]),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    RegistroPage,
    ContactoPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    EmailComposer,
    GoogleMaps,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
  ]
})
export class AppModule { }
