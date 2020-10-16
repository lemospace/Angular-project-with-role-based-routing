import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss'],
})
export class BikesComponent implements OnInit {
  bikes: Data[];

  constructor(private dataService: DataService) { }

  firebaseData;

  ngOnInit(): void {
    this.dataService.getFirebaseData().subscribe((res) => {
      this.firebaseData = res;
    });
    this.getFirebaseData();
  }

  getFirebaseData = () => {
    this.dataService
      .getFirebaseData()
      .subscribe(
        (res) => ((this.firebaseData = res))
      );
  };
}
