import { ComplaintsService } from './../services/complaints.service';
import { Component, OnInit, Input } from '@angular/core';
import { Complaints } from '../_models/Complains';
import { Pagination, PaginatedResult } from '../_models/Pagination';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AlerifyService } from '../services/alerify.service';
import { User } from '../_models/Users';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  complaints: Complaints[];
  pagination: Pagination;
  complaintContainer = 'New';
  newComplaint: any = {};
  users: User;
  @Input() recepientId: number;
  constructor(private complaintsService: ComplaintsService, private authService: AuthService,
              private route: ActivatedRoute, private alertify: AlerifyService) { }
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
     this.complaints = data['complaints'].result;
     // tslint:disable-next-line: no-string-literal
     this.pagination = data['complaints'].pagination;
     });
  }

  loadComplaints() {
    this.complaintsService.getComplaints(this.authService.decodedToken.nameid, this.pagination.currentPage,
                                    this.pagination.itemsPerPage, this.complaintContainer)
   .subscribe((res: PaginatedResult<Complaints[]>) => {
     this.complaints = res.result;
     this.pagination = res.pagination;
   // tslint:disable-next-line: no-shadowed-variable
   }, error => {
     this.alertify.error(error);
   });
  }
  deleteComplaint(id: number) {
    this.alertify.confirm('Are you sure you want to delete this complaint?', () => {
      this.complaintsService.deleteComplaint(id, this.authService.decodedToken.nameid).subscribe(() => {
        this.complaints.splice(this.complaints.findIndex(m => m.comId === id), 1);
        this.alertify.success('Complaint has been deleted');
      // tslint:disable-next-line: no-shadowed-variable
      }, error => {
        this.alertify.error('Failed to delete the complaint');
      });
    });
  }
  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.loadComplaints();
    }

}
