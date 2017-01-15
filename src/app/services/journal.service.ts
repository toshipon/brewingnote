import { Injectable } from '@angular/core';
import { Journal } from '../models/journal';

@Injectable()
export class JournalService {

  constructor() { }

  create(obj: Journal): Promise {
    return new Promise((resolve, reject) => {
      try {
        var user = firebase.auth().currentUser;
        var newJournalKey = firebase.database().ref().child('journals').push().key;
        var updates = {};
        var id = `/journals/${user.uid}/${newJournalKey}`;
        updates[id] = obj;
        firebase.database().ref().update(updates);
        resolve(id);
      } catch(e) {
        reject(e);
      }
    });
  }
}
