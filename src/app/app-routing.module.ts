import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'',
        redirectTo :'/usuarios',
        pathMatch : 'full',
  },


  { path: 'usuarios',
  
  loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
