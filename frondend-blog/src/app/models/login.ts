export class login{
    email :String;
    password : String;
    constructor(email :String,password : String){
        this.email = email,
        this.password = password
    
    }
}

export class registro{
    name :String
    email :String;
    password : String;
    constructor(email :String,password : String,name:String){
        this.email = email,
        this.password = password
        this.name = name
    
    }
}