import {Credit} from './credit';

export class User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  imgProfile: string;
  admin?: string;
  credits?: Credit[];

  constructor(firstName: string, lastName: string, email: string, password: string, imgProfile: string, credits: Credit[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.imgProfile = imgProfile;
    this.credits = credits;
  }

}
