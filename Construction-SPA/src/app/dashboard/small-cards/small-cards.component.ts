import { User } from './../../_models/Users';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaints } from 'src/app/_models/Complains';

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.css']
})
export class SmallCardsComponent implements OnInit {
user: User;
complaints: Complaints[];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
loadComplaints() {
this.router.navigate(['/complaints']);
}
loadMessages() {
  this.router.navigate(['/messages']);
  }
}
