import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit,OnChanges {
  @Input() rating =0
  @Output() sendRating = new EventEmitter<number>()
  starWidth= 0

  constructor() { }
  ngOnChanges(): void {
    this.starWidth=this.rating*16
  }

  ngOnInit(): void {
  }
  showRating():void{
    console.log(this.rating)
    this.sendRating.emit(this.rating)
  }

}
