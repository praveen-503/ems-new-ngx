import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProarchEmsRoutingModule } from './proarch-ems-routing.module';
import { ProarchEmsComponent } from './proarch-ems.component';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  declarations: [ProarchEmsComponent],
  imports: [
    ThemeModule,
    NbMenuModule,
    CommonModule,
    ProarchEmsRoutingModule
  ]
})
export class ProarchEmsModule { }
