import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeSheetComponent } from './time-sheet.component';
import { SmartTableComponent } from '../../pages/tables/smart-table/smart-table.component';


const routes: Routes = [
  {
    path: '',
    component: TimeSheetComponent,
    children: [
      {
        path: 'smart-table',
        component: SmartTableComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeSheetRoutingModule { }
