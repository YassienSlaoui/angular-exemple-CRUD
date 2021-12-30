import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like-deslike',
  templateUrl: './like-deslike.component.html',
  styleUrls: ['./like-deslike.component.css']
})
export class LikeDeslikeComponent  {
  @Input("isfavorite") isfavorite:boolean=false;
  @Output('changed') changed = new EventEmitter;
  hello:string="ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
  onFavoriteClick(){
    this.isfavorite=!this.isfavorite;
    this.changed.emit();
  }


}
