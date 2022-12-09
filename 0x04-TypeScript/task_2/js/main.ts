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
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

const obj1: Directors = {
    firstName: 'Helena',
    lastName: 'Vera',
    location: 'Bogotá',
    fullTimeEmployee: true,
    numberOfReports: 25,
}

console.log(obj1)