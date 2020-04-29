import { AuthService } from './../../services/auth.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AlerifyService } from './../../services/alerify.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_models/Users';
import { NgForm } from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
@ViewChild('editForm') editForm: NgForm;
users: User;
photoUrl: string;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any) {
  if (this.editForm.dirty) {
    $event.returnValue = true;
  }
}

  constructor(private route: ActivatedRoute, private alertify: AlerifyService,
              private userService: UserServiceService, private authService: AuthService ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.users = data ['user'];
    });
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }
updateUser() {
  this.userService.updateUser(this.authService.decodedToken.nameid, this.users).subscribe(next => {
    this.alertify.success('Profile Updated Successfully !');
    this.editForm.reset(this.users);
  // tslint:disable-next-line: no-shadowed-variable
  }, error => {
    this.alertify.error(error);
  });

}
updateMainPhoto(photoUrl) {
  this.users.photoUrl = photoUrl;
}
}
