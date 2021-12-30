import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ValidationInput{
static noSpaceAllowed(control:AbstractControl):ValidationErrors|null{
  if((control.value as string).indexOf(' ')!=-1){
    return{noSpaceAllowed: true};
  }else{
    return null
  }
}

static shouldEmailBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (control.value === 'slaouiy98@gmail.com') {
            resolve({ shouldEmailBeUnique: true });
          } else {
            resolve(null); // resolve
          }
      }, 2000);
  });
}
}
