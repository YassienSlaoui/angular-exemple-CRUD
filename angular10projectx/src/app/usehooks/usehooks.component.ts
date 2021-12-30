import { Component, OnInit ,OnChanges ,OnDestroy,SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-usehooks',
  templateUrl: './usehooks.component.html',
  styleUrls: ['./usehooks.component.css']
})
export class UsehooksComponent implements OnInit,OnChanges,OnDestroy {
   hello: string="";

  constructor() { }
  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges ){
    console.log("ngOnChange"+changes);
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }
}
