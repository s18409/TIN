// Getter and Setter in object initializer
let student = {
    firstName: 'James',
    lastName: 'Bond',
    id: 007,
    courses: ['Math', 'English', 'Informatics'],
    grades: [1, 2, 3, 4, 5],
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
        let parts = name.split(' ');
        if (parts.length !== 2) throw "Full Name Should Consist FirstName and Lastname.";
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
    get averageGrade() {
        if (this.grades.length === 0)
            return 0;
        return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
    }
}

/*
// Adding Getter and Setter after creation of an object
Object.defineProperty(student, 'fullName', {
    get: function () {
        return this.firstName + " " + this.lastName;
    },
    set: function (name) {
        let parts = name.split(' ');
        if (parts.length !== 2) throw "Full Name Should Consist FirstName and Lastname.";
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
});
Object.defineProperty(student, 'averageGrade', {
    get: function () {
        if (this.grades.length === 0)
            return 0;
        return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
    }
});
*/

console.log("full name:", student.fullName, "\ngrades average:", student.averageGrade);
student.fullName = "John Wick";
console.log("new full name:", student.fullName);
