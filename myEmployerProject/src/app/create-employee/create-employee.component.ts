import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';;
import { Emplyee } from '../Entity/emplyee';
import { EmplyeeServiceService } from '../service/emplyee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 employeeAded:Emplyee =new Emplyee();
 idOfEmployee:number
  constructor(private service:EmplyeeServiceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.idOfEmployee=this.route.snapshot.params['id']
    console.log(this.idOfEmployee)
    if(this.idOfEmployee!=undefined){
      this.service.GetEmployee(this.idOfEmployee).subscribe(data=>{
        this.employeeAded=data
      },error=>console.log(error)
      )
    }
    
  }
  AddEmploye(){
    if(this.idOfEmployee!=undefined){
      this.service.UpdateEmployee(this.idOfEmployee,this.employeeAded).subscribe(data=>{
        console.log(this.employeeAded)
        this.router.navigate(['/employees'])
      })
    }else{
     this.service.AddEmployees(this.employeeAded).subscribe(res=>{
      console.log(this.employeeAded)
      this.router.navigate(['/employees'])
    },
    error=>console.log(error)
    ) 
    }
    
    
  }
}
