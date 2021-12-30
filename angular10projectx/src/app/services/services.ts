import { Observable } from 'rxjs';

export class serviceString{
data:any;
constructor(){

}
getAll(){
  return ["JAVA","JS","C#","ASP.NET"];
}
getObservable(){
this.data = new Observable(observer=>{
  console.log(this.getAll())
  this.getAll().map(res=>observer.next(res))
  setTimeout(() => {
    observer.next("Hello")
  }, 1000);
  setTimeout(() => {
    observer.next("yassine")
  }, 3000);
})
return this.data

}
}
