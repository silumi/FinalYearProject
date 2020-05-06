import { AlerifyService } from './../../services/alerify.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserPhotos } from 'src/app/_models/UserPhotos';
import { FileUploader } from 'ng2-file-upload';
import { AuthService } from 'src/app/services/auth.service';
import { error } from 'protractor';

@Component({
  selector: 'app-user-photo-editor',
  templateUrl: './user-photo-editor.component.html',
  styleUrls: ['./user-photo-editor.component.css']
})
export class UserPhotoEditorComponent implements OnInit {
  @Input() userPhoto: UserPhotos[];
  @Output() getMemberPhotoChange = new EventEmitter<string>();
  uploader: FileUploader;
  hasBaseDropZoneOver: false;
  baseUrl = environment.apiURL;
  currentMainPhoto: UserPhotos;
  constructor(private authService: AuthService, private userService: UserServiceService, private alertify: AlerifyService) { }

  ngOnInit(): void {
    this.initializeUploader();
  }
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'user/' + this.authService.decodedToken.nameid + '/userPhotos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: UserPhotos = JSON.parse(response);
        const photo = {
          photoId: res.photoId,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          ismain: res.ismain
        };
        this.userPhoto.push(photo);
        if (photo.ismain) {
          this.authService.ChangeMemberPhoto(photo.url);
          this.authService.currentUser.photoUrl = photo.url;
          localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
        }
      }
    };
  }
  setMainPhoto(photo: UserPhotos) {
// tslint:disable-next-line: deprecation
this.userService.setUserMainPhoto(this.authService.decodedToken.nameid, photo.photoId).subscribe(() => {
 this.currentMainPhoto = this.userPhoto.filter(p => p.ismain === true)[0];
 this.currentMainPhoto.ismain = false;
 photo.ismain = true;
 this.authService.ChangeMemberPhoto(photo.url);
 this.authService.currentUser.photoUrl = photo.url;
 localStorage.setItem('user', JSON.stringify(this.authService.currentUser));

// tslint:disable-next-line: no-shadowed-variable
}, error => {
  this.alertify.error(error);
});
  }
  deletePhoto(id: number){
    this.alertify.confirm('Are you sure that you want to delete photo?', () => {
      this.userService.deletePhoto(this.authService.decodedToken.nameid, id).subscribe(() => {
        this.userPhoto.splice(this.userPhoto.findIndex(p => p.photoId === id), 1);
        this.alertify.success('Photo Deleted!');
      // tslint:disable-next-line: no-shadowed-variable
      }, error => {
        this.alertify.error('Failed to delete!!!');
      });
    });
  }
}
