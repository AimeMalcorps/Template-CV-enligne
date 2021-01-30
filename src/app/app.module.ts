import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ScreenshotsComponent } from './screenshots/screenshots.component';

const appRoutes: Routes = [
  {path: 'parcours', component: ParcoursComponent },
  {path: 'certifications', component: CertificationsComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'not-found', component: ErrorComponent },
  {path: '**', redirectTo: '/not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    ParcoursComponent,
    CertificationsComponent,
    ContactComponent,
    ErrorComponent,
    ScreenshotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
