import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'ngx-hour-remark',
  templateUrl: './hour-remark.component.html',
  styleUrls: ['./hour-remark.component.scss']
})
export class HourRemarkComponent implements OnInit,ViewCell {

  resultValue ;
  @Input() value: any; // data from table
  @Input() praveen: string | number; // data from table

  @Input() rowData;
  @Output() selectEdit = new EventEmitter();
  isEditable:boolean=false;
  constructor() { }

  ngOnInit(): void {
    // console.log('this value is ',this.value);
    // console.log('this praveen is ',this.praveen);
    // console.log('rowData',this.rowData);
    this.resultValue = this.value.value;
  }
  togelEditable(){
    this.isEditable = !this.isEditable;
  }
  updatedValue(event){
    // console.log('event',event);
    this.rowData[this.value.title]=event;
    // console.log('this.rowData',this.rowData);
    this.selectEdit.emit(this.rowData);
  }

}
