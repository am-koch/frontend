import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionPage } from './competition';

import { MenuModule } from '../../components/menu/menu.module';


@NgModule({
  declarations: [
    CompetitionPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionPage),
    MenuModule
  ],
})
export class CompetitionPageModule {}
