// Inheritance
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(name) {
        let parts = name.split(' ');
        if (parts.length !== 2) throw "Full Name Should Consist FirstName and Lastname";
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

class Student extends Person {
    constructor(firstName, lastName, id, grades) {
        super(firstName, lastName);
        this.id = id;
        this.grades = grades;
    }

    get averageGrade() {
        if (this.grades.length === 0)
            return 0;
        return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
    }

    printsStudentAndGradesAverage() {
        console.log(this.fullName, "grades average:", this.averageGrade);
    }
}

let student = new Student("James", "Bond", 1, [1, 2, 3, 4, 5]);
student.printsStudentAndGradesAverage();
student.fullName = "John Wick";
console.log("new full name:", student.fullName);
