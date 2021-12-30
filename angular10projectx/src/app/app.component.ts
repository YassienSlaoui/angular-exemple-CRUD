import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular10projectx';
  favState= true;
  hello(){
    alert('hello')
  }
  obs:any=interval(1000).pipe(take(6)).subscribe(e=>{if(e<10)console.log(e)})
}


