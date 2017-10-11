import { InjectionToken, } from '@angular/core';
import { FirebaseAppConfig } from '../interfaces';
import * as firebase from 'firebase/app';

export const FirebaseAppConfigToken = new InjectionToken<FirebaseAppConfig>('FirebaseAppConfigToken');

export class FirebaseApp implements firebase.app.App {
  name: string;
  options: {};
  auth: () => firebase.auth.Auth;
  database: () => firebase.database.Database;
  messaging: () => firebase.messaging.Messaging;
  storage: () => firebase.storage.Storage;
  delete: () => Promise<any>;
}

export function _firebaseAppFactory(config: FirebaseAppConfig, appName?: string): FirebaseApp {
  try {
    if (appName) {
      return firebase.initializeApp(config, appName);
    } else {
      return firebase.initializeApp(config);
    }
  }
  catch (e) {
    return firebase.app(null);
  }
}