import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwissGamesPage } from './swiss-games';

import { MenuModule } from '../../components/menu/menu.module';


@NgModule({
  declarations: [
    SwissGamesPage,
  ],
  imports: [
    IonicPageModule.forChild(SwissGamesPage),
    MenuModule
  ],
})
export class SwissGamesPageModule {}
