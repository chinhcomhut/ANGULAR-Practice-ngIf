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
public names = ['TPHCM','Hà Nội', 'Hải Dương'];
dataFromServers = ['TPHCM', 'Hà Nội', 'Hải Dương', 'Long An', 'Chí Linh'];
public product: any[] = [
  {
    id: 1,
    name: 'iphone',
    price: 10000
  },
{
  id: 2,
    name: 'nokia',
  price: 20000
},
  {
    id: 3,
    name: 'samsung',
    price: 30000
  }
]
  public productFromServer: any[] = [
    {
      id: 1,
      name: 'iphone',
      price: 10000
    },
    {
      id: 2,
      name: 'nokia',
      price: 20000
    },
    {
      id: 3,
      name: 'samsung',
      price: 30000
    },
    {
      id: 4,
      name: 'blackberri',
      price: 40000
    },
    {
      id: 5,
      name: 'LG',
      price: 50000
    }
    ]
  constructor() { }
  onClick() {
    this.isShow = !this.isShow;
  }
  onChange(value) {
    this.isCheck = value;
  }


  ngOnInit() {
  }
  onLoadData() {
  this.product = this.productFromServer;
  }
  myTrackByFunction (index, item) {
  return item.id;
  }
}
