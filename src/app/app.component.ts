import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shopify';

  // cart_value=0;
  cart_value:any;
  sub_obs =new Subject<number>()
  beh_sub_obs = new BehaviorSubject<number>(0)

  constructor(private productService:ProductService){}
  ngOnInit(): void {
    // this.productService.cartValue$.subscribe(val=>this.cart_value=val);
    this.cart_value= this.productService.cartValue$;
    this.sub_obs.next(1)
    this.beh_sub_obs.next(1)
  }


  updateCart():void{
    // this.cart_value=this.productService.cartValue;
    // this.sub_obs.subscribe(val=>console.log("subject =", val))
    // this.beh_sub_obs.subscribe(val=>console.log("Behaviourial subject =", val))

    // this.sub_obs.next(2)
    // this.beh_sub_obs.next(2)
  }

}
