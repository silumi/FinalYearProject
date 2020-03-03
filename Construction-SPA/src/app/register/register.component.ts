import { AuthService } from './../services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerMode = false;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  register() {
    this.authService.register(this.model).subscribe(() => {
     console.log('succ');
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
  console.log(error);
});
  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('canceled');
  }
  registerToggle(){
    this.registerMode = true;
  }
}
