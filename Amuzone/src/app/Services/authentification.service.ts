import { User } from "../Model/User";

export class AuthentificationService{
   usernmae:String = "Mahdi";
   password:String = "jilal"; 

   getUsername(){
       return this.usernmae;
   }

   getPassword(){
       return this.password;
   }

   isAuthentified(user:User){
        if(user.username == this.usernmae && user.password == this.password){
            return true;
        }else{
            return false;
        }
   }
}