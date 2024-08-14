export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassDefinition;
}

interface StudentClassDefinition {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassDefinition{
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  workOnHomework(): string {
    return 'Currently working';
  }
  
  displayName(): string {
    return `${this.firstName}`;
  }
}
