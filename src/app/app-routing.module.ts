import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
];

@NgModule({
  imports:[RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{}
