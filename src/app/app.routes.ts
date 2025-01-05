import { Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { UserPageComponent } from './user-page/user-page.component';

export const routes: Routes = [
    { path: 'home', title: 'Home oldal', component: HomepageComponent},
    { path: 'user', title: 'User oldal', component: UserPageComponent},
    { path: '', title: 'Főoldal', component: AppComponent},
];