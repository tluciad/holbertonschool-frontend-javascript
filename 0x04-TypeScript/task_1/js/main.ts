interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [anyAtr: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  console.log(teacher3);

  function printTeacher(firstName:string, lastName:string): string {
    return (`${firstName[0]}. ${lastName}`)
  }
  console.log(printTeacher("John", "Doe"));

  interface StudentClassInterface {
    firstName: string, 
    lastName: string, 
    workOnHomework(): string;
    displayName(): string;   
  }

  interface StudentClassConstuctor {
    new(firstName: string, lastName: string): StudentClassInterface; 
  }

  class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
      }
    
    displayName(): string {
        return this.firstName;
      }
  }
 

