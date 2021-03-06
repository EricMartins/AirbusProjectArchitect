import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { FuselageComponent } from './fuselage/fuselage.component'
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const ROUTES: Routes = [

    { path: '', component: HomeComponent },    
    { path: 'home', component: HomeComponent },    
    { path: 'fuselage', component: FuselageComponent },  
    { path: 'about', component: AboutComponent }, 
    { path: '**', component: NotFoundComponent},   

]
