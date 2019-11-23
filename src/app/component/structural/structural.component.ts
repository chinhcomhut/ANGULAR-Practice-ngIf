import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {
public username = 'Đồng Chính';
public isShow = true;
public isCheck = true;
public age: number;
  constructor() { }
  onClick() {
    this.isShow = !this.isShow;
  }
  onChange(value) {
    this.isCheck = value;
  }


  ngOnInit() {
  }

}
