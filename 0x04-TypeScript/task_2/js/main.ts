interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [anyAtr: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'London',    
    numberOfReports: 17,
  };  

const obj1: Directors = {
    firstName: 'Helena',
    fullTimeEmployee: true,
    lastName: 'Vera',
    location: 'Bogotá',    
    numberOfReports: 25,
}

console.log(obj1)
console.log(director1)