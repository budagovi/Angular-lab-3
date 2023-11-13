export interface User {
  firstname:string| null,
  lastname:string,
  gender:string,
  address: {
    country:string,
    city:string,
    street:string,
  },
  mobileNum:string,
  dob:Date,
  position:string,
  subscription:boolean,
  email: string[]
}
