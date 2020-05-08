import { error } from 'protractor';
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
messages: Message[];
pagination: Pagination;
messageContainer = 'Unread';
  constructor(private messageService: MessagesService, private authService: AuthService,
              private route: ActivatedRoute, private alertify: AlerifyService) { }

  ngOnInit(): void {
     this.route.data.subscribe(data => {
     // tslint:disable-next-line: no-string-literal
    this.messages = data['messages'].result;

    // tslint:disable-next-line: no-string-literal
    this.pagination = data['messages'].pagination;
    });
  }
loadMessages() {
  this.messageService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage,
                                  this.pagination.itemsPerPage, this.messageContainer)
 .subscribe((res: PaginatedResult<Message[]>) => {
   this.messages = res.result;
   this.pagination = res.pagination;
 // tslint:disable-next-line: no-shadowed-variable
 }, error => {
   this.alertify.error(error);
 });
}

deleteMessage(id: number){
  this.alertify.confirm('Are you sure you want to delete this message?', () => {
    this.messageService.deleteMessage(id, this.authService.decodedToken.nameid).subscribe(() => {
      this.messages.splice(this.messages.findIndex(m => m.id === id), 1);
      this.alertify.success('Message has been deleted');
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alertify.error('Failed to delete the message');
    });
  });
}
pageChanged(event: any): void {
this.pagination.currentPage = event.page;
this.loadMessages();
}
}
