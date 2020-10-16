import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.scss'],
})
export class EditDetailComponent implements OnInit {
  products: Data[];
  bike: Data;

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

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public rolesService: RolesService
  ) { }
  ngOnInit(): void {
    this.getBike();
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

  getBike(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getBike(id).subscribe((bike) => {
      this.bike = bike;
      this.newProductFrom.setValue(bike);
    });
  }

  onUpdate(): void {
    let data = this.newProductFrom.value;
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.onUpdate(data, id);
  }
  deleteBike(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.deleteBike(id);
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
