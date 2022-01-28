import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartValue = 0
  // cartValue$ = new Subject<number>();
  cartValue$ = new BehaviorSubject<number>(0);
  private obs$ = of("raj", 20)
  private obs2$ = of (12,"raj",[94,98,99])
  private obs3$ = new Observable(
    observe=>{
      observe.next(15);
      observe.next("Sudhir");
      observe.next({maths:95,angular:96});
      // observe.error("Something went wrong")
      setTimeout(()=>{
        observe.next("new data added");
        observe.complete()
      },5000
      )
    }
  )
private obs4$ = of(1,2,3,4,5)

  increementCartValue():void{
    this.cartValue++;
    this.cartValue$.next(this.cartValue)
    console.log(this.cartValue)
  }
getObs1(): Observable<string|number>
{return this.obs$}

getObs2(): Observable<any>
{return this.obs2$}

getObs3(): Observable<any>
{return this.obs3$}

getObs4(): Observable<any>
{return this.obs4$}
  constructor() { }
}
