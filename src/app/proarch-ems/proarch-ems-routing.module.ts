import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProarchEmsComponent } from './proarch-ems.component';


const routes: Routes = [
  {
    path: '',
    component: ProarchEmsComponent,
    children: [
      {
        path: 'timesheet',
        loadChildren: () => import('./time-sheet/time-sheet.module')
          .then(m => m.TimeSheetModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProarchEmsRoutingModule { }
