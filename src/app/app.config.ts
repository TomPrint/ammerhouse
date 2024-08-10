import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"ammerhouse-792bc","appId":"1:466159678372:web:6c0dd2c51290ba37e0c731","storageBucket":"ammerhouse-792bc.appspot.com","apiKey":"AIzaSyAdcHhHT4jg-Cr-6VRADQc7FHF5mXIFqFo","authDomain":"ammerhouse-792bc.firebaseapp.com","messagingSenderId":"466159678372"})), provideFirestore(() => getFirestore())]
};
