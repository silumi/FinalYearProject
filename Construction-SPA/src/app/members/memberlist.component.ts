import { ActivatedRoute } from '@angular/router';

import { AlerifyService } from '../services/alerify.service';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../_models/Users';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberListComponent implements OnInit {
user: User[];
  constructor(private usersService: UserServiceService, private alertyfy: AlerifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.user = data['services'];
    });
  }
}
