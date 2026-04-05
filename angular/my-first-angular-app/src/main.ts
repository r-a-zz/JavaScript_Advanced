import { bootstrapApplication } from '@angular/platform-browser';  // Angular starts/loads from here.
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
