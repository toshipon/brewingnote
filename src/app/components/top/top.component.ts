import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  isLogin: boolean;

  constructor() { }

  ngOnInit() {
    this.isLogin = firebase.auth().currentUser !== null;
  }

  signup() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

}
