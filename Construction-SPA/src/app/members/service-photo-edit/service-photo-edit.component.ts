import { AuthService } from './../../services/auth.service';
import { environment } from './../../../environments/environment';
import { ServicePhotos } from './../../_models/ServicePhoto';
import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-service-photo-edit',
  templateUrl: './service-photo-edit.component.html',
  styleUrls: ['./service-photo-edit.component.css']
})
export class ServicePhotoEditComponent implements OnInit {
@Input() servicePhoto: ServicePhotos[];
  uploader: FileUploader;
  hasBaseDropZoneOver: false;
  baseUrl = environment.apiURL;
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.initializeUploader();
  }
fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'user/' + this.authService.decodedToken.nameid + '/servicePhotos',
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
        const res: ServicePhotos = JSON.parse(response);
        const photo = {
          servicePhotoId: res.servicePhotoId,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        };
        this.servicePhoto.push(photo);
      }
    };
  }
}
