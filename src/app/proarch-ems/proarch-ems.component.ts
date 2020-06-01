import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './proarch-menu';

@Component({
  selector: 'ngx-proarch-ems',
  template: `
  <ngx-one-column-layout>
    <nb-menu [items]="menu"></nb-menu>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>
`,
  styleUrls: ['./proarch-ems.component.scss']
})
export class ProarchEmsComponent {
  menu = MENU_ITEMS;
}
