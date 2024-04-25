import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  public user = {
    username: '',
    password:'',
    nome:'',
    sobrenome: '',
    email:'',
    telefone:''
  }

  constructor(private userService: UserService) {}

  ngOnInit(): void {

  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      alert ('O login do usuário é requerido');
      return;
    }
  }

}
