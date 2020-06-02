import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }


  getCurrentWeekTimeSheet(id, year, month, day) {
    return this.http.get(this.apiUrl + '/timesheet/weekly/' + id + '/' + year + '/' + month + '/' + day);
  }
  getPreviousWeekTimeSheet(id, year, month, day) {
    return this.http.get(this.apiUrl + '/timesheet/weekly/' + id + '/' + year + '/' + month + '/' + day + '/previous');
  }
  getNextWeekTimeSheet(id, year, month, day) {
    return this.http.get(this.apiUrl + '/timesheet/weekly/' + id + '/' + year + '/' + month + '/' + day + '/next');
  }
  // closeUserStory(id,story:Story){
  //   return this.http.put(this.apiUrl + '/user-story/close-user-story/'+id,story);
  // }
  // addOrUpdateWeeklyTimeSheetRow(row){
  //   row.Hours1 = Number(row.Hours1);
  //   row.Hours2 = Number(row.Hours2);
  //   row.Hours3 = Number(row.Hours3);
  //   row.Hours4 = Number(row.Hours4);
  //   row.Hours5 = Number(row.Hours5);
  //   row.Hours6 = Number(row.Hours6);
  //   row.Hours7 = Number(row.Hours7);
  //   console.log(row);
  //   return this.http.put(this.apiUrl+'/timesheet/weekly/tasktime',row);
  // }
  // updateEmployeeProjectId(empId,projectId){
  //   return this.http.put(this.apiUrl + '/employee/'+Number(empId)+'/'+Number(projectId),{},{observe:'response'});
  // }
  // updateUserStory(story: Story) {
  //   return this.http.put(this.apiUrl+'/user-story/'+Number(story.UserStoryId),story);
  // }
}
