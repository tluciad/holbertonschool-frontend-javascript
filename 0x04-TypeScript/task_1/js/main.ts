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

  function printTeacher(contract: boolean, firstName: string, fullTimeEmployee: boolean, lastName: string, location: String): string {
    return `${contract}"\n" ${firstName}"\n" ${fullTimeEmployee}"\n" ${lastName}"\n"${location}`;
  
  }
  console.log(printTeacher(false, 'John', false, 'Doe', 'London'));
