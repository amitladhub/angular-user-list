import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  showGreenBanner = false;
  hideSubmitButton = true;
  constructor(private ActivatedRoute: ActivatedRoute, private CommonService: CommonService, private router: Router) { }
  form = new FormGroup({
    username: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    city: new FormControl(''),
    department: new FormControl(''),

  })

  onSubmit(form) {
    const value = form.value;
    let updatedItem = { "username": value.username, "first_name": value.first_name, "last_name": value.last_name, "city": value.city, "department": value.department };
    this.CommonService.userLists.forEach((item) => {
      if (item.username == this.ActivatedRoute.snapshot.params.id) {
        this.CommonService.userLists.splice(this.CommonService.userLists.indexOf(item), 1, updatedItem)
      }

    })
    this.showGreenBanner = true;
    this.hideSubmitButton = false
    new Promise(() => {
      setTimeout(() => {
        this.router.navigate(['/user']);
      }, 2000);
    })
  }
  showConfigResponse() {
    this.CommonService.getHeroes()
      .subscribe(resp => {
        this.CommonService.userLists.forEach((item) => {
          if (item.username == this.ActivatedRoute.snapshot.params.id) {
            this.form.patchValue({
              username: item.username,
              first_name: item.first_name,
              last_name: item.last_name,
              city: item.city,
              department: item.department,

            })
            console.log(this.form.value)
          }
        });
        console.log(this.ActivatedRoute.snapshot.params.id);

      });
  }

  ngOnInit(): void {
    this.showConfigResponse();
    console.log(this.form)
  }

}
