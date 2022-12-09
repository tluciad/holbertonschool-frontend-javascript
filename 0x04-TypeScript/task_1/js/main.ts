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
