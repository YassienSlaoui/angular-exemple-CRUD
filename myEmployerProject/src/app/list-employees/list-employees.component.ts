import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emplyee } from '../Entity/emplyee';
import { EmplyeeServiceService } from '../service/emplyee-service.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
   list:Emplyee[]
  constructor(private service:EmplyeeServiceService,private router:Router) { }
  
  ngOnInit(): void {
    this.service.getEmployees().subscribe(data=>{this.list=data
    console.log(data)
    console.log(this.list)
    })
    console.log(this.list)
  }
  getEmployees(){
    this.service.getEmployees().subscribe(data=>{this.list=data
      console.log(data)
      console.log(this.list)
      })
  }
  deleteEmployee(id:number){
    this.service.DeleteEmployee(id).subscribe(data=>{console.log(data)
    this.getEmployees()
    },error=>console.log(error))
    
  }
  updateEmployee(id:number){
    this.router.navigate(['/create-employee/'+id])
  }

}
