import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {AdminsComponent} from "./admins/admins.component";
import {ClientsComponent} from "./clients/clients.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'admins', component: AdminsComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
