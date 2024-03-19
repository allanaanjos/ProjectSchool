import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls:  ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent implements OnInit {
  @Input() shadow = false;
  @Input() menuTitle: string = '';
  @Input() popText  = false;


  constructor() { }

  ngOnInit(): void {
  }

}
