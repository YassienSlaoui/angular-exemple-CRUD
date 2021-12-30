import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serviceString } from '../services/services';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent{
  dataArray:any
  myCours:String[];
  
  constructor(private servic:serviceString,private http:HttpClient){
    this.myCours=servic.getAll();
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data=>this.dataArray=data)
  }
  email:any;
  isActive=false;
  hello(){
    alert('hello')
  }
  inputWrite(email:any){
    console.log(email);
  }
  changecolor($event:any){
    $event.stopPropagation()
    if(this.isActive)
    this.isActive=false;
    else
    this.isActive=true;
  }
  getObservabel(){
    this.servic.getObservable().subscribe(

      (next:any)=>{console.log(next)},
      (error:any)=>{console.log(error)},
      ()=>{console.log("complete")}

      );

  }
}
