import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css']
})
export class CategoriesAddComponent implements OnInit {

  categoryAddForm = new FormGroup({
    name: new FormControl(''),
    thumbnail: new FormControl(''),
    image: new FormControl(''),
    active: new FormControl('false'),

  })
  constructor(private categoriesService: CategoriesService,
    private router:Router) { }

  ngOnInit() {

  }
addCategory(value){
  this.categoriesService.addCategory(value).subscribe(response => {
    this.router.navigateByUrl('/admin/categories')
  })
}
}
