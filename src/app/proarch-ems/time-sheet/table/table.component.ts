import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { HourRemarkComponent } from './hour-remark/hour-remark.component';
import { TimesheetService } from '../services/timesheet.service';
import { WeeklyTimeSheet, DateSplit, Story, Source } from '../models/timesheet.model';
@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {

  weeklyTimeSheet = new  WeeklyTimeSheet();
  currentDate: Date;

  sourceData : Source[] = [];


  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: false,
    columns: {
      userStory: {
        title: 'User Story',
        type: 'string'
      },
      monday: {
        title: 'Monday',
        type: 'number',
      },
      tuesday: {
        title: 'Tuesday',
        type: 'custom',
        valuePrepareFunction: (row) => {return {title:'firstName',value:row}  },//pass values to ButtonViewComponent
        renderComponent: HourRemarkComponent,
        onComponentInitFunction: (instance) => {
          instance.selectEdit
            .subscribe( (data) => {
             // this.source.setFilter(data);
            });
          }
      },
      wednesday: {
        title: 'Wednesday',
        type: 'string',
      },
      thursday: {
        title: 'Thursday',
        type: 'string',
      },
      friday: {
        title: 'Friday',
        type: 'string',
      },
      saturday: {
        title: 'Saturday',
        type: 'number',
      },
      sunday: {
        title: 'Sunday',
        type: 'string'
      },


    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,
              private tsService:TimesheetService) {
    const data = this.service.getData();
    // this.source.load(data);
    this.currentDate = new Date();
    this.getCurrentWeekTimeSheet();
  }

  getCurrentWeekTimeSheet() {
    var date = this.dateFormate(this.currentDate);
    this.tsService.getCurrentWeekTimeSheet(91696, date.Year, date.Month, date.Day)
      .subscribe(res => {
        console.log('response',res);
        this.weeklyTimeSheet = res as WeeklyTimeSheet;
        this.weeklyTimeSheet.Rows.forEach(ele => {
          var sourced = new Source();
          sourced.userStory = ele.Story;
          sourced.monday = ele.Hours1 + '/'+ ele.Remarks1;
          sourced.tuesday = ele.Hours2 + '/'+ ele.Remarks2;
          sourced.wednesday = ele.Hours3 + '/'+ ele.Remarks3;
          sourced.thursday = ele.Hours4 + '/'+ ele.Remarks4;
          sourced.friday = ele.Hours5 + '/'+ ele.Remarks5;
          sourced.saturday = ele.Hours6 + '/'+ ele.Remarks6;
          sourced.sunday = ele.Hours7 + '/'+ ele.Remarks7;
          this.sourceData.push(sourced);
        })

        console.log('souce data is:',this.sourceData);
        this.source.load(this.sourceData);

        //localStorage.setItem('duplTimeSheet', JSON.stringify(this.weeklyTimeSheet))
        //this.TotalHours();
      }, err => { console.log(err) });
  }
  dateFormate(date) {
    var date1 = new Date(date);
    var dateSplit = new DateSplit();
    dateSplit.Year = date1.getFullYear();
    dateSplit.Month = date1.getMonth() + 1;
    dateSplit.Day = date1.getDate();
    return dateSplit;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
