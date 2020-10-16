import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { STEP_ITEMS } from '../../assets/multi-step-form';
import { Router } from '@angular/router';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  title = 'ng-guard';

  @ViewChild('closeModal') closeModal: ElementRef;

  isLoggedIn = false;

  constructor(private router: Router, public rolesService: RolesService) {
    this.isLoggedIn = false;
  }

  formContent: any;
  formData: any;
  activeStepIndex: number;

  ngOnInit(): void {
    this.formContent = STEP_ITEMS;
    this.formData = {};
  }

  onFormSubmit(formData: any): void {
    this.formData = formData;

    // post form data here
    alert(JSON.stringify(this.formData));
  }
  loginAsOwner() {
    this.isLoggedIn = true;
  }

  loginAsAdmin() {
    console.log('Login As Admin');
    this.isLoggedIn = true;
    this.closeModal.nativeElement.click();

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
  login(val: string) {
    this.rolesService.login(val)
      .subscribe(res => {
        if (res.success) {
          this.closeModal.nativeElement.click();
        }
      });
  }
}
