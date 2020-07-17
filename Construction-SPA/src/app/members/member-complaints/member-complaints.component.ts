import { ComplaintsService } from './../../services/complaints.service';
import { Component, OnInit, Input } from '@angular/core';
import { Complaints } from 'src/app/_models/Complains';
import { AuthService } from 'src/app/services/auth.service';
import { AlerifyService } from 'src/app/services/alerify.service';

@Component({
  selector: 'app-member-complaints',
  templateUrl: './member-complaints.component.html',
  styleUrls: ['./member-complaints.component.css']
})
export class MemberComplaintsComponent implements OnInit {
  @Input() recepientId: number;
  complaints: Complaints[];
  newComplain: any = {};
  constructor(private complaintService: ComplaintsService, private authservice: AuthService, private alertify: AlerifyService) { }

  ngOnInit(): void {
  }
  sendComplaints() {
    this.newComplain.recepientId = this.recepientId;
    this.complaintService.sendComplaint(this.authservice.decodedToken.nameid, this.newComplain)
    .subscribe((complain: Complaints) => {
      this.alertify.success('Complaint sent success!');
      this.complaints.unshift(complain);
      this.newComplain.complain = '';

  // tslint:disable-next-line: no-shadowed-variable
  }, error => {
    this.alertify.error(error);
  });
  }
}
