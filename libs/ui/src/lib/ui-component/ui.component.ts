import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myorg-ui-component',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  public stringList : string[];

  constructor() { }

  ngOnInit(): void {
    this.stringList = ["works", "as", "intended"];
  }

}
