import { AlerifyService } from './../../services/alerify.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/_models/Message';
import { MessagesService } from 'src/app/services/messages.service';
import { error } from 'protractor';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
@Input() recepientId: number;
messages: Message[];
newMessage: any = {};
  constructor(private messageService: MessagesService, private authservice: AuthService, private alertify: AlerifyService) { }

  ngOnInit(): void {
this.loadMessages();
  }
loadMessages() {
  const currentUserId = +this.authservice.decodedToken.nameid;
  this.messageService.getMessageThread(this.authservice.decodedToken.nameid, this.recepientId)
  .pipe(
    tap(messages => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < messages.length; i++) {
        if (messages[i].isRead === false && messages[i].recepientId === currentUserId) {
          this.messageService.markAsRead(currentUserId, messages[i].id);
        }
      }
    })
  )
  .subscribe(messages => {
    this.messages = messages;
  // tslint:disable-next-line: no-shadowed-variable
  }, error => {
    this.alertify.error(error);
  });
}
sendMessage() {
  this.newMessage.recepientId = this.recepientId;
  debugger;
  this.messageService.sendMessage(this.authservice.decodedToken.nameid, this.newMessage)
  .subscribe((message: Message) => {
    this.messages.unshift(message);
    this.newMessage.content = '';
// tslint:disable-next-line: no-shadowed-variable
}, error => {
  this.alertify.error(error);
});
}
}
