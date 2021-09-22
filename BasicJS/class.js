//CLASS
class Person {
    cosntructure(firstName,lastName,dob){ //fungsi untuk create objek dari cosnt
        this.firstName =firstName;
        this.lastName = lastName;
        this.dob= new Date(dob);
    }

    getFullName(){
        return `${this.firstName} ${this.lastName} ${this.dob}`;
    }
    
}   

// instaniate objek
const p1 = new Person('Marchell','Thomas','01');
console.log(p1.getFullName());