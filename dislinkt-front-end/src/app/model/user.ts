import { UserProfile } from "./userProfile";

export class UserModel{
    role?: string='';
    id?: string='';
    firstName?: string='';
    lastName?: string='';
    username?: string='';
    password?: string='';
    key?: string='';
    email?: string='';
    address?: string='';
    phoneNumber?: string='';
    dateOfBirth?: string='';
    isVerified?: boolean=false;
    sub?: string='';
    gender?: string = '';
    isPublic?: boolean = false;
    profile = new UserProfile();
}