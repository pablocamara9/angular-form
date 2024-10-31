import { Component } from '@angular/core';
import { UserDto } from '../../models/user.dto';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrl: './user-add-form.component.css'
})
export class UserAddFormComponent {

  conocerWeb = ['Buscando en Google', 'A través de un amigo', 'Por mi profesor', 'Otros'];
  user = new UserDto('', '', '', 0, '', '', '', '', false);
  submitted = false;

  constructor() {}

  validar() {
    if(this.user.passwd == this.user.confirmPasswd) {
      if(this.user.terms = true) {
        this.addUser();
      }
    }
  }

  addUser() {
    console.log(this.user);
    this.submitted = true;
  }


}
