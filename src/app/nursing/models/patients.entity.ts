export class Patient{
  id:any;
  firstName:any;
  lastName:any;
  photoUrl:any;
  birthDate:any;

  constructor(id:any, firstName:any, lastName:any, birthDate:any, photoUrl:any) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.photoUrl = photoUrl;
  }
}
