import { Component, OnInit } from '@angular/core';
import { filter,count, map, Subscription } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
private is_subscribed! : Subscription;


  ngOnInit(): void {
   this.is_subscribed= this.productService.getObs3()
    // .pipe(
    //   filter(val=>val%2==0),
    //   map(val=>val*6),
    //   filter(val=>val>20)
    // )
    .subscribe(
      val=>{console.log(val)},
      err=>{console.log("Error occured",err)},
      ()=>{console.log("observation complete")}

    )
  }
products = [
  {
    id: 1,
    name: "i phone",
    price : 60000.456,
    rating:3.5,
    description :"nice phone",
    category : "phone"
  },
  {
    id: 2,
    name: "nokia",
    price : 50000,
    rating:4,
    description :"best phone",
    category : "phone"
  },
  {
    id: 3,
    name: "samsung",
    price : 40000,
    rating:3,
    description :"cheap phone",
    category : "phone"
  },
  {
    id: 4,
    name: "LG tv",
    price : 90000,
    rating:2,
    description :"best tv",
    category : "tv"
  },
  {
    id: 5,
    name: "MI watch",
    price : 90000,
    rating:5,
    description :"nice watch",
    category : "watch"
  },
  {
    id: 6,
    name: "whirlpool refrigerator",
    price : 100000,
    rating:3,
    description :"nice refrigerator",
    category : "fridge"
  }

]
searchBy="i phone";
filterMe(event:any):void{
  console.log(event.target.value)
  this.searchBy=event.target.value
}
displayrating(rating:number){
  console.log(rating)
}

constructor(private productService:ProductService) { }
addtocart():void{
  this.productService.increementCartValue();
  console.log("Added to cart")
}
unsubscribe():void{
  if(this.is_subscribed){
    this.is_subscribed.unsubscribe()
    console.log("Observable unsubscribed")
  }

}

}
