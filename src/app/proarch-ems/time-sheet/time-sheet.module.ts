import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSheetRoutingModule } from './time-sheet-routing.module';
import { TimeSheetComponent } from './time-sheet.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
  NbTreeGridModule,
  NbIconModule
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { TableComponent } from './table/table.component';
import { HourRemarkComponent } from './table/hour-remark/hour-remark.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TimeSheetComponent, TableComponent, HourRemarkComponent],
  imports: [
    CommonModule,
    TimeSheetRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbCheckboxModule,
    NbTabsetModule,
    NbPopoverModule,
    NbButtonModule,
    NbSelectModule,
    NbTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TimeSheetModule { }
