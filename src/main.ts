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
import { provideRouter } from '@angular/router';
import { AccordionComponent } from './app/ui-elements/accordion/accordion.component';
import { AlertsComponent } from './app/ui-elements/alerts/alerts.component';
import { AvatarsComponent } from './app/ui-elements/avatars/avatars.component';
import { BadgeComponent } from './app/ui-elements/badge/badge.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BreadcumpComponent } from './app/ui-elements/breadcump/breadcump.component';
import { ButtonsComponent } from './app/ui-elements/buttons/buttons.component';
import { ButtonsGroupComponent } from './app/ui-elements/buttons-group/buttons-group.component';
import { CardsComponent } from './app/ui-elements/cards/cards.component';
import { CarouselComponent } from './app/ui-elements/carousel/carousel.component';
import { DropDownsComponent } from './app/ui-elements/drop-downs/drop-downs.component';
import { ImagesComponent } from './app/ui-elements/images/images.component';
import { ListComponent } from './app/ui-elements/list/list.component';
import { NotificationsComponent } from './app/ui-elements/notifications/notifications.component';
import { PaginationComponent } from './app/ui-elements/pagination/pagination.component';
import { PopoversComponent } from './app/ui-elements/popovers/popovers.component';
import { ProgressComponent } from './app/ui-elements/progress/progress.component';
import { SpinnersComponent } from './app/ui-elements/spinners/spinners.component';
import { TabsComponent } from './app/ui-elements/tabs/tabs.component';
import { TooltipComponent } from '@angular/material/tooltip';
import { VideosComponent } from './app/ui-elements/videos/videos.component';
import { ModalsComponent } from './app/ui-elements/modals/modals.component';
import { TooltipsComponent } from './app/ui-elements/tooltips/tooltips.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),  // Use provideAnimations for BrowserAnimationsModule
    provideHttpClient(),  // If you are using HttpClient in your app, include this
    // Add any other providers here
    provideRouter([
      { path: 'accordion', component: AccordionComponent },
      { path: 'alerts', component: AlertsComponent },
      { path: 'avatars', component: AvatarsComponent },
      { path: 'badge', component: BadgeComponent },
      { path: 'breadcrumb', component: BreadcumpComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'buttons-group', component: ButtonsGroupComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'dropdowns', component: DropDownsComponent },
      { path: 'images', component: ImagesComponent },
      { path: 'list', component: ListComponent },
      { path: 'modals', component: ModalsComponent },
      { path: 'notifications', component: NotificationsComponent },

      { path: 'pagination', component: PaginationComponent },
      { path: 'popovers', component: PopoversComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'spinners', component: SpinnersComponent },
      { path: 'tabs', component: TabsComponent },
      { path: 'tooltips', component: TooltipsComponent },
      { path: 'videos', component: VideosComponent },



      // other routes...
    ]), provideAnimationsAsync()
  ]
})
.catch(err => console.error(err));
