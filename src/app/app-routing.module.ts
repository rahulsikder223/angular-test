import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    loadChildren: () => import('./feature-modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: "news",
    loadChildren: () => import('./feature-modules/news/news.module').then(m => m.NewsModule)
  },
  {
    path: "*",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
