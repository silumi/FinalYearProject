import { Pagination, PaginatedResult } from './../_models/Pagination';
import { ActivatedRoute, Router } from '@angular/router';

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
users: User = JSON.parse(localStorage.getItem('service'));
// serviceTypeList = [{value: 'Horroscope', display: 'Horroscope'}, {value: 'carpenter', display: 'carpenter'}];
userParams: any = {};
pagination: Pagination;
textItems = false;
  constructor(private usersService: UserServiceService, private alertyfy: AlerifyService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.user = data['services'].result;
      // tslint:disable-next-line: no-string-literal
      this.pagination = data ['services'].pagination;
    });
    this.userParams.minChargers = 100;
    this.userParams.maxChargers = 10000;
    this.userParams.orderBy = 'lastActive';
    this.loadUsers();
  }
  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }
  resetFilters() {
    this.userParams.minChargers = 100;
    this.userParams.maxChargers = 10000;
    this.loadUsers();
  }
  loadUsers() {
    this.usersService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
      .subscribe((res: PaginatedResult<User[]>) => {
        this.user = res.result;
        this.pagination = res.pagination;

    }, error => {
      this.alertyfy.error(error);
    });
  }
  textItemToggle() {
    this.textItems = true;
  }
}
