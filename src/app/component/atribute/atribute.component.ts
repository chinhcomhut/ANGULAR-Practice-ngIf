import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atribute',
  templateUrl: './atribute.component.html',
  styleUrls: ['./atribute.component.scss']
})
export class AtributeComponent implements OnInit {
  public isSpecial = false;

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isSpecial = !this.isSpecial;
  }
  setClases() {
    return {
      'border-blue': this.isSpecial,
      'pd-10': this.isSpecial,
      'cl-red': this.isSpecial,
      'border-yellow': !this.isSpecial
    };
  }

}
