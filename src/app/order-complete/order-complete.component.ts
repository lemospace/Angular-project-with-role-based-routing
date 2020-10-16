import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.scss'],
})
export class OrderCompleteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.router.navigateByUrl('order');
  }
}
