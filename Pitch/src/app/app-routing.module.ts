import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'edit-profile', loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule) },
  { path: 'messages', loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesPageModule) },
  { path: 'message/:id', loadChildren: () => import('./pages/message/message.module').then(m => m.MessagePageModule) },
  { path: 'authentication', loadChildren:
  () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationPageModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule) },
  { path: 'activities', loadChildren: () => import('./pages/activities/activities.module').then(m => m.ActivitiesPageModule) },
  { path: 'activity-list', loadChildren: () => import('./pages/activity-list/activity-list.module').then(m => m.ActivityListPageModule) },
  { path: 'activity-detail/:id', loadChildren:
  () => import('./pages/activity-detail/activity-detail.module').then(m => m.ActivityDetailPageModule) },
  { path: 'activity-checkout/:tripID', loadChildren:
  () => import('./pages/activity-checkout/activity-checkout.module').then(m => m.ActivityCheckoutPageModule) },
  { path: 'image', loadChildren: () => import('./pages/modal/image/image.module').then(m => m.ImagePageModule) },
  { path: 'location', loadChildren: () => import('./pages/modal/location/location.module').then(m => m.LocationPageModule) },
  { path: 'support', loadChildren: () => import('./pages/support/support.module').then(m => m.SupportPageModule) },
  { path: 'booking-list', loadChildren: () => import('./pages/booking-list/booking-list.module').then(m => m.BookingListPageModule) },
  { path: 'favorites', loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesPageModule) },
  { path: 'local-weather', loadChildren: () => import('./pages/local-weather/local-weather.module').then(m => m.LocalWeatherPageModule) },

  { path: 'camping-list', loadChildren: () => import('./pages/camping-list/camping-list.module').then(m => m.CampingListPageModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'camping-detail/:id', loadChildren: () => import('./pages/camping-detail/camping-detail.module').then(m => m.CampingDetailPageModule) },
  { path: 'camping-checkout/:campingID/:pitchID', loadChildren:
  () => import('./pages/camping-checkout/camping-checkout.module').then(m => m.CampingCheckoutPageModule) },

  { path: 'rentcamper', loadChildren: () => import('./pages/rentcamper/rentcamper.module').then(m => m.RentcamperPageModule) },
  { path: 'campers-list', loadChildren: () => import('./pages/campers-list/campers-list.module').then(m => m.CampersListPageModule) },
  // tslint:disable-next-line: max-line-length
  { path: 'camper-detail/:id', loadChildren: () => import('./pages/camper-detail/camper-detail.module').then(m => m.CamperDetailPageModule) },
  { path: 'camper-checkout/:campershopID/:camperID', loadChildren:
  () => import('./pages/camper-checkout/camper-checkout.module').then(m => m.CamperCheckoutPageModule) },
  {
    path: 'chatbot', loadChildren: () => import('./pages/chatbot/chatbot.module').then( m => m.ChatbotPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
