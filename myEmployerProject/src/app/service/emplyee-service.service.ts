import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emplyee } from '../Entity/emplyee';
@Injectable({
  providedIn: 'root'
})
export class EmplyeeServiceService {
  Url ="http://localhost:8080/api/v1/employees";
  constructor(private http: HttpClient) { }
  getEmployees():Observable<Emplyee[]>{
    return this.http.get<Emplyee[]>(this.Url);
  }
  AddEmployees(emp:Emplyee):Observable<Emplyee>{
    return this.http.post<Emplyee>(this.Url,emp);
  }
  DeleteEmployee(id:number):Observable<object>{
    return this.http.delete<Emplyee>(`${this.Url}/${id}`);
  }
  
  UpdateEmployee(id:number,emp:Emplyee):Observable<Emplyee>{
    return this.http.put<Emplyee>(`${this.Url}/${id}`,emp);
  }
  GetEmployee(id:number):Observable<Emplyee>{
    return this.http.get<Emplyee>(`${this.Url}/${id}`)
  }
}
