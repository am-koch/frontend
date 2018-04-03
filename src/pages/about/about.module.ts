import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';

import { MenuModule } from '../../components/menu/menu.module';


@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    MenuModule
  ],
})
export class AboutPageModule {}
