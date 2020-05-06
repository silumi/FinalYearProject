import { User } from './../_models/Users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
supplier: User;
  constructor() { }

  ngOnInit(): void {
  }

}
