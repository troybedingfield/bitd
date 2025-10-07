import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CreatecharacterComponent } from './components/createcharacter/createcharacter.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'characters', component: CharactersComponent, canActivate: [AuthGuard] },
    { path: 'characters/:id', component: CharacterSheetComponent, canActivate: [AuthGuard] },
    { path: 'createcharacter', component: CreatecharacterComponent, canActivate: [AuthGuard] },
    { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
];
