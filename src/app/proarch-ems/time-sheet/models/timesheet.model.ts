export class WeeklyTimeSheet {
  TimeSheetId: 3
  EmployeeId: number;
  Year: number;
  Month: string;
  WeekNumber: number;
  WeekDays: WeekDays;
  StartDate:Date;
  Rows:Rows[];

}
export class Story {
  UserStoryId: number;
  Name: string;
  IsRecurring: boolean;
  RecurringDefaultHours: number;
  ProjectId: number;
  EmployeeId: number;
  IsClosed: boolean;
}
export class Rows {
  RowID: number;
  TimeSheetId: 3
  Story: Story;
  Hours1: number;
  Remarks1: string;
  Hours2: number;
  Remarks2: string;
  Hours3: number;
  Remarks3: string;
  Hours4: number;
  Remarks4: string;
  Hours5: number;
  Remarks5: string;
  Hours6: number;
  Remarks6: string;
  Hours7: number;
  Remarks7:string;
}
export class WeekDays {
  Year: number;
  WeekNumber: number;
  Day1: number;
  IsHoliday1: boolean;
  Day2: number;
  IsHoliday2: boolean;
  Day3: number;
  IsHoliday3: boolean;
  Day4: number;
  IsHoliday4: boolean;
  Day5: number;
  IsHoliday5: boolean;
  Day6: number;
  IsHoliday6: boolean;
  Day7: number;
  IsHoliday7: boolean;
}

export class TotalHoursModel {
TotalHours1:number = 0;
TotalHours2:number = 0;
TotalHours3:number = 0;
TotalHours4:number = 0;
TotalHours5:number = 0;
TotalHours6:number = 0;
TotalHours7:number = 0;
}

export class DateSplit {
  Year:number =0;
  Month:number=0;
  Day:number=0;
}


export class Source {
  userStory : Story;
  monday : string;
  tuesday : string;
  wednesday : string;
  thursday : string;
  friday : string;
  saturday : string;
  sunday : string;

}
