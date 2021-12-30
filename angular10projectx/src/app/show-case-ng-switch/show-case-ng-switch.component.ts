import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-case-ng-switch',
  templateUrl: './show-case-ng-switch.component.html',
  styleUrls: ['./show-case-ng-switch.component.css']
})
export class ShowCaseNgSwitchComponent  {
  courses:any[]=["JAVA","PHP","JS"]
  student:any[]=["yassine","Hassan","Iman"]
  defaultValue:string="courses";
  changeView(courses:string){
    if(courses==="courses"){
      this.defaultValue="courses";
    }else{
      this.defaultValue="student";
    }
  }


}
