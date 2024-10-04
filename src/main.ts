// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations'; // Alternative way to provide animations
import { provideHttpClient } from '@angular/common/http'; // If you need HttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),  // Use provideAnimations for BrowserAnimationsModule
    provideHttpClient(),  // If you are using HttpClient in your app, include this
    // Add any other providers here
  ]
})
.catch(err => console.error(err));
