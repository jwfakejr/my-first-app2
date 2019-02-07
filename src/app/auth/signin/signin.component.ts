import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,
              private dataStorage: DataStorageService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
      setTimeout(() =>this.getRecipes(),2000); // need to wait awhile for the token to be returned

  }
  getRecipes() {
    this.dataStorage.getRecipes();
  }
}
