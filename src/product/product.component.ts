import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myid = null;
  constructor(private route: ActivatedRoute) { }

ngOnInit() {
  this.myid = this.route.snapshot.paramMap.get('id');
}

}