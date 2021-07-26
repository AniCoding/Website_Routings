import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { NewsComponent } from './pages/news/news.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Trainer', component: TrainerComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Contact Us', component: ContactUsComponent },

];



@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  declarations: [],
  exports:  [RouterModule],
})
export class AppRoutingModule { }
