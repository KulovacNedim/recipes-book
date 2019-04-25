import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCPlf5yxrQi8xyFARidVN_Qx4yHcRmtrQg",
    authDomain: "ng-recipe-book-b01a5.firebaseapp.com",
    databaseURL: "https://ng-recipe-book-b01a5.firebaseio.com",
    projectId: "ng-recipe-book-b01a5",
    storageBucket: "ng-recipe-book-b01a5.appspot.com",
    messagingSenderId: "641466166385"

      // apiKey: "AIzaSyCPlf5yxrQi8xyFARidVN_Qx4yHcRmtrQg",
      // authDomain: "ng-recipe-book-b01a5.firebaseapp.com"
    });
  }
}
