import { AlerifyService } from './../services/alerify.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Pagination, PaginatedResult } from './../_models/Pagination';
import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/Message';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessagesService, private authService: AuthService,
              private route: ActivatedRoute, private alertify: AlerifyService) { }

  ngOnInit(): void {
    // this.route.data.subscribe(data => {
    //   // tslint:disable-next-line: no-string-literal
    //   this.messages = data['messages'];
    //   // tslint:disable-next-line: no-string-literal
    // });
  }

}
