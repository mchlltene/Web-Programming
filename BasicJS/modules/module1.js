export const myPI=Math.PI; //dieksoprt agar dipakai di file lain

export const squared =(number)=>number*number;// import fumvtion


export class Student {             //export class
    constructor(nim,faculty){
        this.nim= nim;
        this.faculty =faculty;
    }
    display (){
        return `NIM: ${this.nim} and Faculty ${this.faculty}`
    }
}

// export {myPI,squared,Student}; -> Export sympel