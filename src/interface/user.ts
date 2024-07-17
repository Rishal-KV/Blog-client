export interface LoginData {
    email :string;
    password : string
}

export interface Signup {
    name : string;
    email : string;
    confirmPassword:string;
    password : string
}

export interface Posts {
    _id? :string;
    title : string,
    description : string,
    image : Blob | string
    user : string | any;
    createdAt? : Date
}

export interface User {

   user : {
    user : {
        _id : string;
        name : string,
        email : string
        image : ""
    }
   }
   
}

export interface Saved {
    userId : string,
    posts : string[]
}

export interface ProfileType {
    name : string,
    email : string,
    about : string,
    image : string
}