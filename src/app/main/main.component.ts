import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { RolesService } from '../roles.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  title = 'ng-guard';

  @ViewChild('closeModal') closeModal: ElementRef;

  isLoggedIn = false;

  constructor(private router: Router, public rolesService: RolesService) {
    this.isLoggedIn = false;
  }

  ngOnInit(): void { }

  loginAsOwner() {
    this.isLoggedIn = true;
  }

  loginAsAdmin() {
    console.log('Login As Admin');
    this.isLoggedIn = true;
  }

  login(val: string) {
    this.rolesService.login(val)
  }

  logout() {
    this.isLoggedIn = false;
    this.rolesService.logout()
      .subscribe(res => {
        if (!res.success) {
          this.router.navigate(['/main']);
        }
      });
  }

}
