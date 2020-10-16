import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Data } from './data';

import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: AngularFirestore) {}

  getBike(id: string): Observable<Data> {
    return this.firestore.doc<Data>('firebaseData/' + id).valueChanges();
  }

  createFirebaseData(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('firebaseData')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
  getFirebaseData() {
    return this.firestore
      .collection('firebaseData')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Data;
            const id = a.payload.doc.id;
            return { ...data, id };
          })
        )
      );
  }

  deleteBike(id: string) {
    return (
      this.firestore.doc('firebaseData/' + id).delete(),
      alert('Product has been deleted!')
    );
  }

  onUpdate(data, id) {
    return (
      this.firestore.doc('firebaseData/' + id).set(data),
      alert('Changes have been saved!'),
      console.log(data)
    );
  }
}
