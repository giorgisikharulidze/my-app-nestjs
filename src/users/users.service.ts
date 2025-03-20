export class UsersService{
    users: {id: number, name: string, age: number, gender: string, isMarried: boolean}[]=
    [
        {id: 1, name: 'John', age: 28, gender: 'male', isMarried: false},
        {id: 2, name: 'Mark', age: 32, gender: 'male', isMarried: true},
        {id: 3, name: 'Sarah', age: 25, gender: 'female', isMarried: false}
 
    ]

    getAllUsers(){
        return this.users;
    }

    getUserById(id: number){
        return this.users.find(x=>x.id=id);
    }

    CreateUser(user: {id: number, name: string, age: number, gender: string, isMarried: boolean}){
     this.users.push(user);
        
    }
}