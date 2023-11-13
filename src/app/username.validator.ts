import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";



export function validateName(forbiddenName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isForbidden = control.value === forbiddenName;
    return isForbidden ? { forbiddenName: { value: control.value } } : null;
  };
}