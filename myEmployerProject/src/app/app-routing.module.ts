import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';

const routes: Routes = [
  {path :'employees',component:ListEmployeesComponent},
  {path :'create-employee',component:CreateEmployeeComponent},
  {path :'create-employee/:id',component:CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
