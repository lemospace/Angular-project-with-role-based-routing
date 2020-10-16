import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RolesService } from '../roles.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent implements OnInit {
  products: Data[];

  newProductFrom = new FormGroup({
    id: new FormControl(''),
    imgUrl: new FormControl(''),
    price: new FormControl(''),
    discount: new FormControl(''),
    main: new FormControl(''),
    shop: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    shipping: new FormControl(''),
    discountUntil: new FormControl(''),
    new: new FormControl(''),
    color: new FormControl(''),
    size: new FormControl(''),
    review: new FormGroup({
      author: new FormControl(''),
      text: new FormControl(''),
      rating: new FormControl(''),
    }),
  });

  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router, public rolesService: RolesService) {
    this.isLoggedIn = false;
  }
  ngOnInit(): void { }

  onSubmit() {
    let data = this.newProductFrom.value;

    this.dataService.createFirebaseData(data).then((res) => { });
    alert('Product has been aded!');
  }

  public myUploader(event) {
    for (const file of event.files) {
      const dataset = this.readFile(file);
    }
  }

  private readFile(file: File) {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.newProductFrom.controls.imgUrl.setValue(reader.result);
    };
  }
  title = 'ng-guard';

  @ViewChild('closeModal') closeModal: ElementRef;

  isLoggedIn = false;

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
