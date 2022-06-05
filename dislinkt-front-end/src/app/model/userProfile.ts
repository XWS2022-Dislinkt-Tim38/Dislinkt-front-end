import { Education } from "./education";
import { WorkExperience } from "./workExperience";

export class UserProfile{
    biography?:  string = '';
    interests?: string[] =[];
    education?: Education[] = [];
    workExperience?: WorkExperience[] = [];
}