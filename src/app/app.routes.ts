import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'Info', component:MainComponent },
    { path: 'Proyectos', component:ProyectsComponent },
    { path: '', redirectTo:'/Info', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
