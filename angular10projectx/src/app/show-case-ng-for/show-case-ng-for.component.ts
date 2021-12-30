import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-case-ng-for',
  templateUrl: './show-case-ng-for.component.html',
  styleUrls: ['./show-case-ng-for.component.css']
})
export class ShowCaseNgForComponent  {

  constructor() { }
persons:any[]=[
  {
    "name":"yasine",
    "language":["java","php"]
  },
  {
    "name":"wadie",
    "language":["8alib lah","ki9olo"]
  }
]
remove(i:any){
  this.persons.splice(i,1)
}
}
