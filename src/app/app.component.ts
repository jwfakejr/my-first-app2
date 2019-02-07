import {Component, OnInit, OnDestroy} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth'
import {AuthService} from "./auth/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  loadedFeature = 'recipe';

  constructor(private authService: AuthService) {

  }
  ngOnInit() {
    firebase.initializeApp({apiKey: "AIzaSyBxvl7FNdgFazhBvXsaQ6T7uHkrVnnSUdY",
      authDomain: "recipebook-9b418.firebaseapp.com"});
    this.authService.signoutUser();
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnDestroy() {
    this.authService.signoutUser();
  }
}
