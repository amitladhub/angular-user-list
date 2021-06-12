import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../service/common.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  username: number;
  firstname: string;
  lastname: string;
  city: string;
  department: string;
  showAddItems: boolean = false;
  sortedColumn: string;
  pageNumber = 1;
  validUsername = false;
  showGreenBanner = false;
  closeResult = '';
  constructor(private modalService: NgbModal, private router: ActivatedRoute, private CommonService: CommonService) {
  }

  public userListsData = this.CommonService.userLists;


  onAddItem(form: NgForm) {
    this.validUsername = false
    const value = form.value;

    this.CommonService.userLists.forEach((item) => {
      if (item.username == value.username) {
        this.validUsername = true
      }
    });

    if (!this.validUsername) {
      let addNewItem = { "username": value.username, "first_name": value.firstname, "last_name": value.lastname, "city": value.city, "department": value.department };
      this.CommonService.userLists.push(addNewItem);
      this.showGreenBanner = true;
      this.modalService.dismissAll();
    }

    new Promise(() => {
      setTimeout(() => {
        this.showGreenBanner = false;
      }, 3000);
    })
  }

  showAddItemsDiv() {
    this.showAddItems = true;
  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
    });
  }

  onEditUser(i: number) {
    this.CommonService.userLists.splice(i, 1);
  }
  
  ngOnInit(): void {

  }

}
